export default {
  trimObject: function (obj) {
    for (let i in obj) {
      if (obj.hasOwnProperty(i)) {
        const value = this.trimString(obj[i]);
        if (value === '') {
          delete obj[i];
        } else {
          obj[i] = value;
        }
      }
    }
    return obj;
  },

  trimString: function (str) {
    //去除字符串首尾空格
    str = str.replace(/(^\s*)|(\s*$)/g, '');
    return str;
  }
};




