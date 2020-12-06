export default class UserResponse {
  private _email: string;
  private _githubId: string;
  private _githubImage: string;
  private _name: string;
  private _description: string;
  private _contributions: number;

  public static builder(): UserResponse {
    return new UserResponse();
  }

  get email() {
    return this._email;
  }

  get githubId() {
    return this._githubId;
  }

  get githubImage() {
    return this._githubImage;
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get contributions() {
    return this._contributions;
  }

  public setEmail(email: string): UserResponse {
    this._email = email;
    return this;
  }

  public setGithubId(githubId: string): UserResponse {
    this._githubId = githubId;
    return this;
  }

  public setGithubImage(githubImage: string): UserResponse {
    this._githubImage = githubImage;
    return this;
  }

  public setName(name: string): UserResponse {
    this._name = name;
    return this;
  }

  public setDescription(description: string): UserResponse {
    this._description = description;
    return this;
  }

  public setContributions(contributions: number): UserResponse {
    this._contributions = contributions;
    return this;
  }

  public build(): UserResponse {
    return this;
  }
}
