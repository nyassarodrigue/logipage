export interface LoginRequest {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface LoginResponse {
  accesToken: string;
  refreshToken: string;
  expiresIn: number;
  tokenType:string;
}

export interface User {
  id:string;
  firsName:string;
  lastName:string;
  email:string;
  roles:string [];
}
