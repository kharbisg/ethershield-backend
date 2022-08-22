const events = require('events');
const { EventEmitter } = require('stream');

class SuspiciousTxnFinder extends EventEmitter {
  constructor(txn_sniffer, rulecfg) {
    super();
    this.match_txn = this.match_txn.bind(this);
    txn_sniffer.on('tx', this.match_txn);
    this.count = 0;
  }

  match_txn(txn) {
    this.count += 1;
    if (this.count % 100 == 0) {
      //console.log(txn);
      this.emit('suspicious_txn', txn);
    }
  }
}

module.exports = SuspiciousTxnFinder;
