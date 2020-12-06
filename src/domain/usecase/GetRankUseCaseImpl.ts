import type { AxiosResponse } from 'axios';

import { axiosFacade } from '../../utils/classes';
import type { RankResponse } from '../../data/rank';
import type GetRankUseCase from './GetRankUseCase';

class GetRankUseCaseImpl implements GetRankUseCase {
  private readonly axiosFacade = axiosFacade;

  public execute(): Promise<AxiosResponse<RankResponse>> {
    return this.axiosFacade.axios.get('/rank');
  }
}

export default new GetRankUseCaseImpl();
