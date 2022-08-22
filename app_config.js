class AppConfig {
  constructor() {
    this.url =
      'wss://summer-spring-lake.quiknode.pro/b8492ef1b59862177343d0efb4b0be83ac49de96/';

    this.options = {
      timeout: 30000,
      clientConfig: {
        maxReceivedFrameSize: 100000000,
        maxReceivedMessageSize: 100000000,
      },
      reconnect: {
        auto: true,
        delay: 5000,
        maxAttempts: 15,
        onTimeout: false,
      },
    };
  }
}

module.exports = AppConfig;
