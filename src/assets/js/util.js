export default {
  trimObject: function (obj) {
    const newObj = {};
    for (let i in obj) {
      if (obj.hasOwnProperty(i)) {
        const value = this.trimString(obj[i]);
        if (value !== '') {
          newObj[i] = value;
        }
      }
    }
    return newObj;
  },
  trimString: function (str) {
    if (typeof str === 'string') {
      //去除字符串首尾空格
      str = str.replace(/(^\s*)|(\s*$)/g, '');
    }
    return str;
  },
  copyObject: function (obj) {
    let newObj = {};
    for (const i in obj) {
      if (obj.hasOwnProperty(i)) {
        newObj[i] = obj[i];
      }
    }
    return newObj;
  }

};




