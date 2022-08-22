class MatchingRulesConfig {
  constructor(rule_updater) {
    this.list_of_wallets = [];
    rule_updater.on('new_wallet_address', this.handle_new_wallet);
  }

  list_of_source_wallets() {
    return this.list_of_wallets;
  }

  handle_new_wallet(wallet_address) {}
}

module.exports = MatchingRulesConfig;
