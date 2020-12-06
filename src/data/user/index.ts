import type { AuthResponse } from '../../dto';
import type UserResponse from '../../dto/GetUserResponse';
import { stateChanger } from '../../utils/functions';
import Store from '../store';
import type { ApiState, MutableValue } from '../types';

type RegisterState = ApiState<string>;

type SendAuthCodeState = ApiState<string>;

type AuthState = ApiState<AuthResponse>;

type MyAccountState = ApiState<UserResponse>;

type ChangeInfoState = ApiState<string>;

export type InitialState = {
  register: Readonly<RegisterState>;
  sendAuthCode: Readonly<SendAuthCodeState>;
  auth: Readonly<AuthState>;
  myAccount: Readonly<MyAccountState>;
  changeInfo: Readonly<ChangeInfoState>;
};

const initialState: InitialState = {
  register: undefined,
  sendAuthCode: undefined,
  auth: undefined,
  myAccount: undefined,
  changeInfo: undefined,
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

  public changeMyAccountState(value: MutableValue<UserResponse>): void {
    stateChanger('myAccount').bind(this)(value);
  }

  public changeChangeInfoState(value: MutableValue<string>): void {
    stateChanger('changeInfo').bind(this)(value);
  }
}

export default new User();
