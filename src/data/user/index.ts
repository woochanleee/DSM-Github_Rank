import Store from '../store';
import type { ApiState, MutableValue } from '../types';

type RegisterState = ApiState<string>;

type SendAuthCodeState = ApiState<string>;

export type InitialState = {
  register: Readonly<RegisterState>;
  sendAuthCode: Readonly<SendAuthCodeState>;
};

const initialState: InitialState = {
  register: undefined,
  sendAuthCode: undefined,
};

class Uesr extends Store<InitialState> {
  constructor() {
    super(initialState);
  }

  public changeRegisterState(value: MutableValue<string>): void {
    this.update((state: InitialState) => {
      const { register } = state;
      return {
        ...state,
        register: {
          ...register,
          ...value,
        },
      };
    });
  }

  public changeSendAuthCodeState(value: MutableValue<string>): void {
    this.update((state: InitialState) => {
      const { sendAuthCode } = state;
      return {
        ...state,
        sendAuthCode: {
          ...sendAuthCode,
          ...value,
        },
      };
    });
  }
}

export default new Uesr();
