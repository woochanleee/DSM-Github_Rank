import type { RegisterRequest, AuthRequest } from '../dto';
import type ChangeInfoRequest from '../dto/ChangeInfoRequest';

export default interface UserSerivce {
  register(request: RegisterRequest): Promise<void>;

  sendAuthCode(email: string): Promise<void>;

  login(request: AuthRequest): Promise<void>;

  getMyAccount(): Promise<void>;

  changeInfo(request: ChangeInfoRequest): Promise<void>;
}
