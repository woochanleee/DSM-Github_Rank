import type RegisterRequest from '../dto/RegisterRequest';

export default interface UserSerivce {
  register(request: RegisterRequest): Promise<void>;

  sendAuthCode(email: string): Promise<void>;
}
