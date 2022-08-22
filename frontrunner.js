class FrontRunner {
  constructor(sus_finder) {
    this.front_run = this.front_run.bind(this);
    sus_finder.on('suspicious_txn', this.front_run);
  }

  front_run(txn) {
    console.log('forntrunning..');
    console.log(txn);
  }
}

module.exports = FrontRunner;
