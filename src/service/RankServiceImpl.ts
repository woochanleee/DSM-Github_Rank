import type { AxiosError } from 'axios';

import type { GetRankUseCase } from '../domain/usecase';
import type { RankService } from './';
import { getRankUseCaseImpl } from '../domain/usecase';
import { rank } from '../data';

class RankServiceImpl implements RankService {
  private readonly rank = rank;

  private readonly getRankUseCaseImpl: GetRankUseCase = getRankUseCaseImpl;

  public async getRank() {
    this.rank.changeRankState({ isLoading: true });
    try {
      const { data, status } = await this.getRankUseCaseImpl.execute();
      this.rank.changeRankState({
        data,
        status,
      });
      this.rank.changeRankState({ isLoading: false });
    } catch (error) {
      const _error: AxiosError = error;
      this.rank.changeRankState({
        status: _error.response.status,
        message: _error.response.statusText,
      });
      this.rank.changeRankState({ isLoading: false });
    }
  }
}

export default new RankServiceImpl();
