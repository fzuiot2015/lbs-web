export default {
  trimObject(obj) {
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
  trimString(str) {
    if (typeof str === 'string') {
      //去除字符串首尾空格
      str = str.replace(/(^\s*)|(\s*$)/g, '');
    }
    return str;
  }
};




