import type { AxiosResponse } from 'axios';

export default interface UserRepository {
  requestRegisterUser(
    authCode: string,
    password: string,
    githubId: string,
    name: string
  ): Promise<AxiosResponse<string>>;

  requestSendAuthCode(email: string): Promise<AxiosResponse<string>>;
}
