import type { AxiosInstance, AxiosResponse } from 'axios';
import type { GetRankResponse } from '../dto';

import { Axios } from '../utils/classes';
import type RankReposiotry from './RankRepository';

class RankReposiotryImpl implements RankReposiotry {
  readonly axios: AxiosInstance = Axios.getInstance();

  public async requestGetRank(): Promise<AxiosResponse<GetRankResponse>> {
    return this.axios.get('/rank');
  }
}

export default new RankReposiotryImpl();
