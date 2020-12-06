import type { AxiosInstance, AxiosResponse } from 'axios';
import type { GetRankResponse } from '../dto';

export default interface RankReposiotry {
  readonly axios: AxiosInstance;

  requestGetRank(): Promise<AxiosResponse<GetRankResponse>>;
}
