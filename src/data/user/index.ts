import type { AuthResponse } from '../../dto';
import { stateChanger } from '../../utils/functions';
import Store from '../store';
import type { ApiState, MutableValue } from '../types';

type RegisterState = ApiState<string>;

type SendAuthCodeState = ApiState<string>;

type AuthState = ApiState<AuthResponse>;

export type InitialState = {
  register: Readonly<RegisterState>;
  sendAuthCode: Readonly<SendAuthCodeState>;
  auth: Readonly<AuthState>;
};

const initialState: InitialState = {
  register: undefined,
  sendAuthCode: undefined,
  auth: undefined,
};

export class User extends Store<InitialState> {
  constructor() {
    super(initialState);
  }

  public changeRegisterState(value: MutableValue<string>): void {
    stateChanger('register').bind(this)(value);
  }

  public changeSendAuthCodeState(value: MutableValue<string>): void {
    stateChanger('sendAuthCode').bind(this)(value);
  }

  public changeAuthState(value: MutableValue<AuthResponse>): void {
    stateChanger('auth').bind(this)(value);
  }
}

export default new User();
