import type { AxiosInstance, AxiosResponse } from 'axios';
import type { AuthResponse } from '../dto';
import type UserResponse from '../dto/GetUserResponse';
import { Axios } from '../utils/classes';

import type UserRepository from './UserRepository';

class UserRepositoryImpl implements UserRepository {
  private axios: AxiosInstance = Axios.getInstance();

  public async requestSendAuthCode(
    email: string
  ): Promise<AxiosResponse<string>> {
    Axios.changeContentType('application/json');

    return this.axios.post('/account/email', {
      email,
    });
  }

  public async requestRegisterUser(
    authCode: string,
    password: string,
    githubId: string,
    name: string
  ): Promise<AxiosResponse<string>> {
    Axios.changeContentType('application/json');

    return this.axios.post('/account', {
      authCode,
      password,
      githubId,
      name,
    });
  }

  public async requestAuth(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    Axios.changeContentType('application/json');

    return this.axios.post('/auth', {
      email,
      password,
    });
  }

  public async requesetGetMyAccount(): Promise<AxiosResponse<UserResponse>> {
    Axios.setHeaderAuthorizationUsingLocalStorage();

    return this.axios.get('/account/me');
  }
}

export default new UserRepositoryImpl();
