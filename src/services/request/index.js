import axios from 'axios';

class MyRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    });
  }

  requrest(config) {
    return this.instance.request(config);
  }

  get(config) {
    return this.instance.request({ ...config, method: 'get' });
  }

  post(config) {
    return this.instance.request({ ...config, method: 'post' });
  }
}

export default MyRequest;
