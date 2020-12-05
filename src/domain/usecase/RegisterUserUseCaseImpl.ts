import type { RegisterUserUseCase } from '.';
import { axiosFacade } from '../../utils/classes';

class RegisterUserUseCaseImpl implements RegisterUserUseCase {
  private readonly axiosFacade = axiosFacade;

  execute(authCode: string, password: string, githubId: string, name: string) {
    this.axiosFacade.changeContentType('application/json');

    return this.axiosFacade.axios.post('/account', {
      authCode,
      password,
      githubId,
      name,
    });
  }
}

export default new RegisterUserUseCaseImpl();
