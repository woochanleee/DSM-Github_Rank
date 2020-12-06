import Store from '../store';
import type { ApiState, MutableValue } from '../types';
import type { UserResponse } from '../user';

export type RankResponse = {
  rank: Array<UserResponse>;
};

type RankState = ApiState<RankResponse>;

export type InitialState = {
  rank: Readonly<RankState>;
};

const initialState: InitialState = {
  rank: undefined,
};

class Rank extends Store<InitialState> {
  constructor() {
    super(initialState);
  }

  public changeRankState(value: MutableValue<RankResponse>): void {
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
