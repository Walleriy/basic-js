const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result: [],
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    this.result.push('( ' + value + ' )');
    return this;
  },
  removeLink(position) {
    if (typeof position === 'number' && position <= this.getLength() && position > 0 )
      this.result.splice(position - 1, 1);
    else {
      this.result = [];
      throw new Error();
    }
    return this;
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    let ready = this.result;
    this.result = [];
    return ready.join('~~');
  }
};


module.exports = chainMaker;