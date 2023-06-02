import MyRequest from './request';
import { BASE_URL, TIMEOUT } from './request/config';

const myRequest = new MyRequest(BASE_URL, TIMEOUT);

export default myRequest;
