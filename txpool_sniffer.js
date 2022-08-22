const Web3 = require('web3');
const events = require('events');
const { EventEmitter } = require('stream');

class TXPoolSniffer extends EventEmitter {
  constructor(app_config) {
    super();
    this.web3 = new Web3(
      new Web3.providers.WebsocketProvider(app_config.url, app_config.options)
    );
  }

  subscribe() {
    this.subscription = this.web3.eth.subscribe(
      'pendingTransactions',
      (err, res) => {
        if (err) console.error(err);
      }
    );

    this.subscription.on('data', (txHash) => {
      setTimeout(async () => {
        try {
          let tx = await this.web3.eth.getTransaction(txHash);
          this.emit('tx', tx);
          //console.log(tx);
        } catch (err) {
          console.error(err);
        }
      });
    });
  }
}

module.exports = TXPoolSniffer;
