import type { AxiosError } from 'axios';
import type { RankService } from '.';
import { Rank, rank } from '../data';
import { GetRankResponse, GetUserResponse } from '../dto';
import { rankRepositoryImpl } from '../repository';
import type RankReposiotry from '../repository/RankRepository';

class RankServiceImpl implements RankService {
  private rank: Rank = rank;

  private readonly rankRepository: RankReposiotry = rankRepositoryImpl;

  public async getRank() {
    this.rank.changeRankState({ isLoading: true });
    try {
      const {
        data: { rank },
        status,
      } = await this.rankRepository.requestGetRank();

      this.rank.changeRankState({
        data: GetRankResponse.builder().setRank(
          rank.map(
            ({
              email,
              githubId,
              githubImage,
              name,
              description,
              contributions,
            }) => {
              return GetUserResponse.builder()
                .setEmail(email)
                .setGithubId(githubId)
                .setGithubImage(githubImage)
                .setName(name)
                .setDescription(description)
                .setContributions(contributions);
            }
          )
        ),
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
