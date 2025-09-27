const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "Environment_Variables",

  env: {
    baseUrl: "http://lojaebac.ebaconline.art.br/",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
