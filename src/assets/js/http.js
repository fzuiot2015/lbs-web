import axios from 'axios'

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
    axios.get(url, {params: params})
      .then(
        (res) => this.callback(res, onSuccess, onFail)
      )
      .catch(
        (res) => alert(res)
      )
  },
  put(url, params, onSuccess, onFail) {
    axios.put(url, params)
      .then(
        (res) => this.callback(res, onSuccess, onFail)
      )
      .catch(
        (res) => alert(res)
      )
  },
  post(url, params, onSuccess, onFail) {
    axios.post(url, params)
      .then(
        (res) => this.callback(res, onSuccess, onFail)
      )
      .catch(
        (res) => alert(res)
      )
  },
  delete(url, id, onSuccess, onFail) {
    axios.delete(url + id)
      .then(
        (res) => this.callback(res, onSuccess, onFail)
      )
      .catch(
        (res) => alert(res)
      )
  }
}
