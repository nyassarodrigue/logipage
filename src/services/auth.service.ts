import { api } from "./api";
import { LoginRequest, LoginResponse, User } from "@/types/auth";
import {tokenService} from "./token.service";

class AuthService {
  async login(payload: LoginRequest) {
    const { data } = await api.post<LoginResponse>("/auth/login", payload);

    tokenService.setAccessToken(data.accessToken);

    return data;
  }

  async me() {
    const { data } = await api.get<User>("/auth/me");
    return data;
  }

  async logout() {
    tokenService.clear();

    await api.post("/auth/logout");
  }

  async refresh() {
    const { data } = await api.post<LoginResponse>("/auth/refresh");
    
    tokenService.setAccessToken(data.accessToken);

    tokenService.set(data.accessToken);

    return data.accesToken;
  }
}

export const authService = new AuthService();
