export default class RegisterRequest {
  private _authCode: string;
  private _password: string;
  private _githubId: string;
  private _name: string;

  public static builder(): RegisterRequest {
    return new RegisterRequest();
  }

  get authCode() {
    return this._authCode;
  }

  get password() {
    return this._password;
  }

  get githubId() {
    return this._githubId;
  }

  get name() {
    return this._name;
  }

  public setAuthCode(authCode: string): RegisterRequest {
    this._authCode = authCode;
    return this;
  }

  public setPassword(password: string): RegisterRequest {
    this._password = password;
    return this;
  }

  public setGitubId(githubId: string): RegisterRequest {
    this._githubId = githubId;
    return this;
  }

  public setName(name: string): RegisterRequest {
    this._name = name;
    return this;
  }

  public build(): RegisterRequest {
    return this;
  }
}
