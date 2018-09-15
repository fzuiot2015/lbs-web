import axios from 'axios'

export default {
  get(url, params, then) {
    axios.get(url, {
      params: params
    }).then((res) => {
      console.log(res);
      const data = res.data;
      if (data.status === 0) {
        then(data);
      } else {
        alert(data.status + " " + data.message);
      }
    })
      .catch((res) => {
        console.log(res);
        alert('连接失败')
      })
  },
  put(url, params, then) {
    axios.put(url, params)
      .then((res) => {
        console.log(res);
        const data = res.data;
        if (data.status === 0) {
          then();
        } else {
          alert(data.status + " " + data.message);
        }
      })
      .catch((res) => {
        console.log(res);
        alert('连接失败')
      })
  },
  delete(url, id, then) {
    axios.delete(url + id)
      .then((res) => {
        console.log(res);
        const data = res.data;
        if (data.status === 0) {
          then();
        } else {
          alert(data.status + " " + data.message);
        }
      })
  }
}
