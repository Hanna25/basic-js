const chainMaker = {
  chainMakerArr: [],
  getLength() {
    return this.chainMakerArr.length;
  },
  addLink(value = ' ') {
    this.chainMakerArr.push('( ' + value +  ' )');
    return this;
  },
  removeLink(position) {
    if (!this.chainMakerArr[position]) {
      this.chainMakerArr = [];
      throw new Error

    } else {
      this.chainMakerArr.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chainMakerArr.reverse();
    return this;
  },
  finishChain() {
    let result = this.chainMakerArr.join('~~');
    this.chainMakerArr = [];
    return result;
  }
};

module.exports = chainMaker;
