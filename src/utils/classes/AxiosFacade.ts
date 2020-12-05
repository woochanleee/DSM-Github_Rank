import axios from 'axios';
import type { AxiosInstance } from 'axios';

type ContentType = 'application/json' | 'multipart/form-data';

class AxiosFacade {
  axios: AxiosInstance;
  axiosWithAuthorizationHeader: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: 'http://52.79.253.30:5050',
      timeout: 10000,
    });
  }

  public setHeaderAuthorizationUsingLocalStorage(): void {
    const accessToken: string = localStorage.getItem('accessToken');
    if (accessToken) {
      this.axios.defaults.headers.common['Authorization'] = accessToken;
    }
  }

  public deleteHederAuthorization(): void {
    delete this.axios.defaults.headers.common['Authorization'];
  }

  public changeContentType(contentType: ContentType) {
    axios.defaults.headers.post['Content-Type'] = contentType;
  }
}

export default new AxiosFacade();
