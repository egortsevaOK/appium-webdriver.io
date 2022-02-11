exports.config = {
  specs: ['./test/**/*.js'],
  maxInstances: 10,
  capabilities: [
    {
      platformName: 'android',
      app: require('path').resolve('./app/finance.apk'),
      automationName: 'UiAutomator2',
      deviceName: 'myDevice',
      maxInstances: 5,
      acceptInsecureCerts: true,
    },
  ],
  port: 4723,
  path: '/wd/hub',
  logLevel: 'info',
  bail: 0,
  baseUrl: 'http://localhost',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters: ['spec', 'dot'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
};
