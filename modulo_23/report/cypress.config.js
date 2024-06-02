const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const { tabNavigation, setDebuggingPort } = require("./cypress/support/utils/tabNavigation");
require('dotenv').config();

module.exports = defineConfig({
  projectId: "uq9ofn",
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    setupNodeEvents(on, config) {

      // require('cypress-html-reporter/GenerateReport')(on, config)
      allureWriter(on, config);

      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          const debuggingPortArg = launchOptions.args.find(
            (arg) => arg.slice(0, 23) === '--remote-debugging-port',
          );
          if (debuggingPortArg) {
            const debuggingPort = debuggingPortArg.split('=')[1];
            setDebuggingPort(debuggingPort);
          }
        }
        return launchOptions;
      });

      on('task', {
        tabNavigation
      });

    },
    env: {
      // MY_ENV: "dev",
      MY_ENV: process.env.MY_ENV,
      ebacStoreVersion: "v1"
    }
  },
  // reporter: 'mochawesome',
  // reporterOptions: {
  //   reportFilename:"[name]-result",
  //   // reportDir: 'reports',
  //   // overwrite: false,
  //   html: false
  //   // json: true
  // },
});
