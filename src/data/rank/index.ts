import Store from '../store';
import type { ApiState, MutableValue } from '../types';
import type { GetRankResponse } from '../../dto';

type RankState = ApiState<GetRankResponse>;

export type InitialState = {
  rank: Readonly<RankState>;
};

const initialState: InitialState = {
  rank: undefined,
};

export class Rank extends Store<InitialState> {
  constructor() {
    super(initialState);
  }

  public changeRankState(value: MutableValue<GetRankResponse>): void {
    this.update((state: InitialState) => {
      const { rank } = state;
      return {
        ...state,
        rank: {
          ...rank,
          ...value,
        },
      };
    });
  }
}

export default new Rank();
