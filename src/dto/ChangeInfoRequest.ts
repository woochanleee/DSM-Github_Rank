export default class ChangeInfoRequest {
  private _githubId: string;
  private _name: string;
  private _description: string;

  public static builder(): ChangeInfoRequest {
    return new ChangeInfoRequest();
  }

  get githubId() {
    return this._githubId;
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  public setGithubId(githubId: string): ChangeInfoRequest {
    this._githubId = githubId;
    return this;
  }

  public setName(name: string): ChangeInfoRequest {
    this._name = name;
    return this;
  }

  public setDescription(description: string): ChangeInfoRequest {
    this._description = description;
    return this;
  }

  public build(): ChangeInfoRequest {
    return this;
  }
}
