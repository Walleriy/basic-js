  const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    let result = 1;
    if (arr.some(item => Array.isArray(item))) {
      let array = arr.reduce((count, current) => count.concat(current), []);
      return result + this.calculateDepth(array);
    }
    return result;
  }
};