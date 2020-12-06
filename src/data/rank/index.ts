import Store from '../store';
import type { ApiState, MutableValue } from '../types';
import type { GetRankResponse } from '../../dto';
import { stateChanger } from '../../utils/functions';

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
    stateChanger('rank').bind(this)(value);
  }
}

export default new Rank();
