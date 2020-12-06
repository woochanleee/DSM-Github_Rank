import type { AxiosInstance, AxiosResponse } from 'axios';
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
}

export default new UserRepositoryImpl();
