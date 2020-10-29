import {post} from '../helpers/request';
const loginEndpoint = 'authentication/authenticate';

export const loginRequests = (email, password) =>
  post(loginEndpoint, {email, password})
    .then( response => response.data.loginReturnObject)

