export default class AuthRequest {
  private _email: string;
  private _password: string;

  public static builder(): AuthRequest {
    return new AuthRequest();
  }

  get email() {
    return this._email;
  }

  get password() {
    return this._password;
  }

  public setEmail(email: string): AuthRequest {
    this._email = email;
    return this;
  }

  public setPassword(password: string): AuthRequest {
    this._password = password;
    return this;
  }

  public build(): AuthRequest {
    return this;
  }
}
