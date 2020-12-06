import type { AxiosError } from 'axios';

import type { UserService } from './';

import { User, user } from '../data';
import { AuthRequest, AuthResponse, RegisterRequest } from '../dto';
import { UserRepository, userRepositoryImpl } from '../repository';
import UserResponse from '../dto/GetUserResponse';
import type ChangeInfoRequest from '../dto/ChangeInfoRequest';

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

  public async getMyAccount(): Promise<void> {
    this.user.changeMyAccountState({ isLoading: true });
    try {
      const {
        data: {
          email,
          githubId,
          githubImage,
          name,
          description,
          contributions,
        },
        status,
      } = await this.userReposictory.requesetGetMyInfo();

      this.user.changeMyAccountState({
        data: UserResponse.builder()
          .setEmail(email)
          .setGithubId(githubId)
          .setGithubImage(githubImage)
          .setName(name)
          .setDescription(description)
          .setContributions(contributions),
        status,
      });
      this.user.changeMyAccountState({ isLoading: false });
    } catch (error) {
      const _error: AxiosError = error;

      this.user.changeMyAccountState({
        status: _error.response?.status,
        message: _error.response?.statusText,
      });
      this.user.changeMyAccountState({ isLoading: false });
    }
  }

  public async changeInfo({
    name,
    description,
    githubId,
  }: ChangeInfoRequest): Promise<void> {
    this.user.changeChangeInfoState({ isLoading: true });
    try {
      const { data, status } = await this.userReposictory.requesetChangeInfo(
        name,
        githubId,
        description
      );

      this.user.changeChangeInfoState({
        data,
        status,
      });
      this.user.changeChangeInfoState({ isLoading: false });
    } catch (error) {
      const _error: AxiosError = error;

      this.user.changeChangeInfoState({
        status: _error.response?.status,
        message: _error.response?.statusText,
      });
      this.user.changeChangeInfoState({ isLoading: false });
    }
  }
}

export default new UserSerivceImpl();
