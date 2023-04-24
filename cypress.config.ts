import { defineConfig } from 'cypress';

const config = defineConfig({
  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack'
    },
    specPattern: '**/*.cy.ts'
  },
  e2e: {
    baseUrl: 'http://localhost:4200',
    setupNodeEvents: (on, config): void => {
      // implement node event listeners here
    }
  },
  chromeWebSecurity: false,
  experimentalModifyObstructiveThirdPartyCode: true,
});

export default config;
