import type { AxiosError, AxiosResponse } from 'axios';

import { axiosFacade } from '../../utils/classes';
import type SendAuthCodeUseCase from './SendAuthCodeUseCase';

class SendAuthCodeUseCaseImpl implements SendAuthCodeUseCase {
  private readonly axiosFacade = axiosFacade;

  public async execute(email: string): Promise<AxiosResponse<string>> {
    this.axiosFacade.changeContentType('application/json');

    return this.axiosFacade.axios.post('/account/email', {
      email,
    });
  }
}

export default new SendAuthCodeUseCaseImpl();
