const AppConfig = require('./app_config.js');
const TXPoolSniffer = require('./txpool_sniffer.js');
const SuspiciousTxnFinder = require('./suspicious_txn_finder.js');
const MatchingRulesConfig = require('./matching_rule_cfg.js');
const RuleUpdater = require('./rule_updater.js');
const FrontRunner = require('./frontrunner.js');

const rup = new RuleUpdater();
const appc = new AppConfig();
const txp = new TXPoolSniffer(appc);
const mrc = new MatchingRulesConfig(rup);
const susfin = new SuspiciousTxnFinder(txp, mrc);
const fr = new FrontRunner(susfin);

txp.subscribe();
