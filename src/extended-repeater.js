const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options) {
  
let { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = options;
  
  let result;
  separator = separator || '+';
  additionSeparator = additionSeparator || '|';
  if (addition === null) addition = 'null';
  else addition = addition;

  result = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  return new Array(repeatTimes).fill(str + result).join(separator);
  
};
  