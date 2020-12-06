import type { AxiosResponse } from 'axios';
import type { AuthResponse } from '../dto';
import type UserResponse from '../dto/GetUserResponse';

export default interface UserRepository {
  requestRegisterUser(
    authCode: string,
    password: string,
    githubId: string,
    name: string
  ): Promise<AxiosResponse<string>>;

  requestSendAuthCode(email: string): Promise<AxiosResponse<string>>;

  requestAuth(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>>;

  requesetGetMyAccount(): Promise<AxiosResponse<UserResponse>>;
}
