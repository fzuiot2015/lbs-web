import axios from 'axios'

/**
 * HTTP请求工具类
 */
const urlRoot = '/api';
export default {
  callback(res, onSuccess, onFail) {
    const data = res.data;
    if (data.status === 0) {
      onSuccess(data);
    } else {
      onFail(data);
    }
  },
  get(url, params, onSuccess, onFail) {
    axios.get(urlRoot+url, {params: params})
      .then(
        (res) => this.callback(res, onSuccess, onFail)
      )
      .catch(
        (res) => alert(res)
      )
  },
  put(url, params, onSuccess, onFail) {
    axios.put(urlRoot+url, params)
      .then(
        (res) => this.callback(res, onSuccess, onFail)
      )
      .catch(
        (res) => alert(res)
      )
  },
  post(url, params, onSuccess, onFail) {
    axios.post(urlRoot+url, params)
      .then(
        (res) => this.callback(res, onSuccess, onFail)
      )
      .catch(
        (res) => alert(res)
      )
  },
  delete(url, id, onSuccess, onFail) {
    axios.delete(urlRoot+url + id)
      .then(
        (res) => this.callback(res, onSuccess, onFail)
      )
      .catch(
        (res) => alert(res)
      )
  }
}
