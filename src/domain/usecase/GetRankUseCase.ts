import type { AxiosResponse } from 'axios';

import type { RankResponse } from '../../data/rank';

export default interface GetRankUseCase {
  execute(): Promise<AxiosResponse<RankResponse>>;
}
