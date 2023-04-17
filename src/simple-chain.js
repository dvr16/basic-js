const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
      return this.chain.length;
  },
  addLink(value) {
      if (value !== 'undefined') {
          this.chain.push(`( ${value} )`);
      } else this.chain.push(`( )`);
      return this;
  },
  removeLink(position) {
      try {
          if (!this.chain[position - 1]) {
              this.chain = [];

              throw new Error("You can't remove incorrect link!");
          }
      } catch (error) {
          this.chain = [];

          throw new Error("You can't remove incorrect link!");
      }
      this.chain.splice(position - 1, 1);
      return this;
  },
  reverseChain() {
      this.chain = this.chain.reverse();
      return this;
  },
  finishChain() {
      let chainString = this.chain.join('~~');
      this.chain = [];
      return chainString;
  },
};

module.exports = {
  chainMaker
};
