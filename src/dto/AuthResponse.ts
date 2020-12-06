export default class AuthResponse {
  private _accessToken: string;

  public static builder(): AuthResponse {
    return new AuthResponse();
  }

  get accessToken() {
    return this._accessToken;
  }

  public setAccessToken(accessToken: string): AuthResponse {
    this._accessToken = accessToken;
    return this;
  }

  public build(): AuthResponse {
    return this;
  }
}
