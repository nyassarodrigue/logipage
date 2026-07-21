import { api } from "./api";

let initialized = false;

export function setupInterceptors() {
  if (initialized) return;

  initialized = true;

  api.interceptors.request.use((config) => {
    // ...
    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      // ...
      return Promise.reject(error);
    },
  );
}
