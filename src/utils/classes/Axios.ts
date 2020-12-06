import axios from 'axios';
import type { AxiosInstance } from 'axios';

type ContentType = 'application/json' | 'multipart/form-data';

export default class Axios {
  private static INSTANCE: AxiosInstance;

  public static getInstance() {
    if (!Axios.INSTANCE) {
      Axios.INSTANCE = axios.create({
        baseURL: 'http://52.79.253.30:5050',
        timeout: 100000,
      });
    }

    return Axios.INSTANCE;
  }

  public static setHeaderAuthorizationUsingLocalStorage(): void {
    const accessToken: string = localStorage.getItem('accessToken');
    if (accessToken) {
      Axios.INSTANCE.defaults.headers.common['Authorization'] =
        'Bearer ' + accessToken;
    }
  }

  public static deleteHederAuthorization(): void {
    delete Axios.INSTANCE.defaults.headers.common['Authorization'];
  }

  public static changeContentType(contentType: ContentType) {
    Axios.INSTANCE.defaults.headers.post['Content-Type'] = contentType;
  }
}
