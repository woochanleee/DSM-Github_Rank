import type { AxiosError } from 'axios';

import type { UserService } from './';
import type {
  RegisterUserUseCase,
  SendAuthCodeUseCase,
} from '../domain/usecase';
import {
  registerUserUseCaseImpl,
  sendAuthCodeUseCaseImpl,
} from '../domain/usecase';
import { user } from '../data';
import type { RegisterRequest } from '../dto';

class UserSerivceImpl implements UserService {
  private readonly user = user;

  private readonly registerUserUseCaseImpl: RegisterUserUseCase = registerUserUseCaseImpl;
  private readonly sendAuthCodeUseCaseImpl: SendAuthCodeUseCase = sendAuthCodeUseCaseImpl;

  public async register({
    authCode,
    password,
    githubId,
    name,
  }: RegisterRequest) {
    this.user.changeRegisterState({ isLoading: true });
    try {
      const { data, status } = await this.registerUserUseCaseImpl.execute(
        authCode,
        password,
        githubId,
        name
      );
      this.user.changeRegisterState({
        data,
        status,
      });
      this.user.changeRegisterState({ isLoading: false });
    } catch (error) {
      const _error: AxiosError = error;
      console.log(_error);
      console.log(_error.response);
      this.user.changeRegisterState({
        status: _error.response.status,
        message: _error.response.statusText,
      });
      this.user.changeRegisterState({ isLoading: false });
    }
  }

  public async sendAuthCode(email: string) {
    this.user.changeSendAuthCodeState({ isLoading: true });
    try {
      const { data, status } = await this.sendAuthCodeUseCaseImpl.execute(
        email
      );
      this.user.changeSendAuthCodeState({
        data,
        status,
      });
      this.user.changeSendAuthCodeState({ isLoading: false });
    } catch (error) {
      const _error: AxiosError = error;
      console.log(_error);
      console.log(_error.response);
      this.user.changeSendAuthCodeState({
        status: _error.response.status,
        message: _error.response.statusText,
      });
      this.user.changeSendAuthCodeState({ isLoading: false });
    }
  }
}

export default new UserSerivceImpl();
