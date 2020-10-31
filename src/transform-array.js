const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (Array.isArray(arr) === false) throw new Error();
  let arr2 = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next' && i != arr.length - 1) i ++;
    else if (arr[i] === '--discard-prev' && arr2.length != 0 && arr[i - 2] != '--discard-next') arr2.pop();
    else if (arr[i] === '--double-next' && i < arr.length - 1) arr2.push(arr[i + 1]);
    else if (arr[i] === '--double-prev' && i != 0 && arr[i-2] != '--discard-next') arr2.push(arr[i - 1]);
    else { 
      if(arr[i] === '--discard-next' || arr[i] === '--discard-prev' || arr[i] === '--double-next' || arr[i] === '--double-prev') continue;
      arr2.push(arr[i]);
    }
  }
  return arr2;
};