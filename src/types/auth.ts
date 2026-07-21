export interface LoginRequest {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface LoginResponse {
  accesToken: string;
  refreshToken: string;
  expiresIn: number;
}
