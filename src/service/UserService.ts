import type { RegisterRequest, AuthRequest } from '../dto';

export default interface UserSerivce {
  register(request: RegisterRequest): Promise<void>;

  sendAuthCode(email: string): Promise<void>;

  login(request: AuthRequest): Promise<void>;

  getMyAccount(): Promise<void>;
}
