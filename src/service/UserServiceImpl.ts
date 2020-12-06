import type { AxiosError } from 'axios';

import type { UserService } from './';

import { User, user } from '../data';
import { AuthRequest, AuthResponse, RegisterRequest } from '../dto';
import { UserRepository, userRepositoryImpl } from '../repository';

class UserSerivceImpl implements UserService {
  private readonly user: User = user;

  private readonly userReposictory: UserRepository = userRepositoryImpl;

  public async register({
    authCode,
    password,
    githubId,
    name,
  }: RegisterRequest) {
    this.user.changeRegisterState({ isLoading: true });
    try {
      const { data, status } = await this.userReposictory.requestRegisterUser(
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

      this.user.changeRegisterState({
        status: _error.response?.status,
        message: _error.response?.statusText,
      });
      this.user.changeRegisterState({ isLoading: false });
    }
  }

  public async sendAuthCode(email: string) {
    this.user.changeSendAuthCodeState({ isLoading: true });
    try {
      const { data, status } = await this.userReposictory.requestSendAuthCode(
        email
      );

      this.user.changeSendAuthCodeState({
        data,
        status,
      });
      this.user.changeSendAuthCodeState({ isLoading: false });
    } catch (error) {
      const _error: AxiosError = error;

      this.user.changeSendAuthCodeState({
        status: _error.response?.status,
        message: _error.response?.statusText,
      });
      this.user.changeSendAuthCodeState({ isLoading: false });
    }
  }

  public async login({ email, password }: AuthRequest): Promise<void> {
    this.user.changeAuthState({ isLoading: true });
    try {
      const {
        data: { accessToken },
        status,
      } = await this.userReposictory.requestAuth(email, password);

      this.user.changeAuthState({
        data: AuthResponse.builder().setAccessToken(accessToken).build(),
        status,
      });
      this.user.changeAuthState({ isLoading: false });
    } catch (error) {
      const _error: AxiosError = error;

      this.user.changeAuthState({
        status: _error.response?.status,
        message: _error.response?.statusText,
      });
      this.user.changeAuthState({ isLoading: false });
    }
  }
}

export default new UserSerivceImpl();
