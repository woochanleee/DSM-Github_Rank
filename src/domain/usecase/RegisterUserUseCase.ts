import type { AxiosResponse } from 'axios';

export default interface RegisterUserUseCase {
  execute(
    authCode: string,
    password: string,
    githubId: string,
    name: string
  ): Promise<AxiosResponse<string>>;
}
