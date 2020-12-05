import { NotEmpty } from '../decorators';

export default class Validation {
  public static isValid = false;

  @NotEmpty()
  public static validate(...args): number {
    return -1;
  }
}
