import type { GetUserResponse } from '.';

export default class GetRankResponse {
  private _rank: Array<GetUserResponse>;

  public static builder(): GetRankResponse {
    return new GetRankResponse();
  }

  get rank() {
    return this._rank;
  }

  public setRank(rank: Array<GetUserResponse>) {
    this._rank = rank;
    return this;
  }

  public build(): GetRankResponse {
    return this;
  }
}
