const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:5050",
    supportFile: false,
    specPattern: "cypress/e2e/**/*.js"
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "mochawesome-report",
    overwrite: false,
    html: true,
    json: false,
    timestamp: "mmddyyyy_HHMMss" // Opcional: agrega timestamp para evitar conflictos
  }
});