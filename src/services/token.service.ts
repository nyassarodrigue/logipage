let accessToken: string | null = null;

class TokenService {
  get() {
    return accessToken;
  }

  set(token: string) {
    accesstoken = token;
  }

  clear() {
    accessToken = null;
  }

  hasToken() {
    return accessToken !== null;
  }
}

export const tokenService = new TokenService();
