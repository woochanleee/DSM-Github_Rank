import type { AxiosResponse } from 'axios';

export default interface SendAuthCodeUseCase {
  execute(email: string): Promise<AxiosResponse<string>>;
}
