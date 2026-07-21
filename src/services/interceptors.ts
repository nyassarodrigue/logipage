import axios from "axios";

import { api } from "./api";
import { authService } from "./auth.service";
import { tokenService } from "./token.service";

let isRefreshing = false;

let failedQueue: {
  resolve: (token: string) => void;
  reject: (error: unknown) => void;
}[] = [];

function processQueue(error: unknown, token?: string) {
  failedQueue.forEach((promise) => {
    if (error) {
      promise.reject(error);
    } else {
      promise.resolve(token!);
    }
  });

  failedQueue = [];
}

api.interceptors.request.use((config) => {
  const token = tokenService.get();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status !== 401 || originalRequest._retry) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({
          resolve: (token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;

            resolve(api(originalRequest));
          },
          reject,
        });
      });
    }

    isRefreshing = true;

    try {
      const token = await authService.refresh();

      processQueue(null, token);

      originalRequest.headers.Authorization = `Bearer ${token}`;

      return api(originalRequest);
    } catch (err) {
      processQueue(err);

      tokenService.clear();

      return Promise.reject(err);
    } finally {
      isRefreshing = false;
    }
  },
);
