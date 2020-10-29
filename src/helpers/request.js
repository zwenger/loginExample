import axios from 'axios';

axios.defaults.baseURL = `${window.location.protocol}//localhost:8000/api/`;

export const get = (path, dispatch) => axios.get(path, {dispatch})

export const post = (path, data = {}, dispatch) => axios.post(path, data, {dispatch})

export const postMultipart = (path, data = {}, dispatch) => axios.post(path, data, {
  dispatch,
  headers: {'Content-Type': `multipart/form-data; boundary=${data._boundary}`}
});

export const put = (path, data = {}, dispatch) => axios.put(path, data, {dispatch});

export const destroy = (path, dispatch) => axios.delete(path, {dispatch});

export const patch = (path, data = {}, dispatch) => axios.patch(path, data, {dispatch});

export default {
  get,
  post,
  postMultipart,
  destroy,
  put,
  patch,
}