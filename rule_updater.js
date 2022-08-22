const events = require('events');
const { EventEmitter } = require('stream');

class RuleUpdater extends EventEmitter {
  constructor() {
    super();
  }

  add_new_address(wallet_address) {
    this.emit('new_wallet_address', wallet_address);
  }
}

module.exports = RuleUpdater;
