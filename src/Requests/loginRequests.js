import {post} from '../helpers/RequestHelper';

const loginEndpoint = 'login';  //'authentication/authenticate';
const logoutEnpoint = 'logout';

export const loginRequests = (email, password) =>
  post(loginEndpoint, {email, password})
    .then(response => response.data)

export const logoutRequest = () =>
  post(logoutEnpoint)