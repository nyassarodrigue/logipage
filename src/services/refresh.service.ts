import axios from "axios";

import { tokenService } from "./token.service";
import type { LoginResponse } from "@/types/auth";

const refreshApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

class RefreshService {
  async refresh() {
    const { data } = await refreshApi.post<LoginResponse>("/auth/refresh");

    tokenService.set(data.accessToken);

    return data.accessToken;
  }
}

export const refreshService = new RefreshService();
