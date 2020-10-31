const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(Direct) { this.Direct = (Direct === false);}
  encrypt(message, key) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (!message || !key) throw new Error;
    let displace = 0;
    let result = "";
    key = key.repeat( Math.ceil ( message.length / key.length ));

    for (let i = 0; i < message.length; i++) {
      const code = this.getChar(message[i], key[i - displace], '+');
      if ( !/[a-z]/ig.test(code)) displace++;
      result += code;
    }
    if (this.Direct === true) result = [...result].reverse().join('');
    return result;
  }    
  decrypt(message, key) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (!message || !key) throw new Error;
    let displace = 0;
    let result = "";
    key = key.repeat( Math.ceil ( message.length / key.length ));

    for (let i = 0; i < message.length; i++) {
      const code = this.getChar(message[i], key[i - displace]);
      if ( !/[a-z]/ig.test(code) ) displace++;
      result += code;
    }
    if (this.Direct === true) result = [...result].reverse().join('');
    return result;
    }

    getChar(mes, ke, operator) {
      const messageCode = mes.toUpperCase().codePointAt(0) - 65;
      const keyCode = ke.toUpperCase().codePointAt(0) - 65;
      if (messageCode < 0 || messageCode > 25) return mes.toUpperCase();

      let code;
      if (operator === '+') code = messageCode + keyCode;
      else code = messageCode - keyCode;

      if (code > 25) code = code - 26;
      else if (code < 0) code = code + 26;
      return String.fromCodePoint(code + 65);
  }
}
module.exports = VigenereCipheringMachine;