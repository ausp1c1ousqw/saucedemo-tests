import hooks from "./hooks/hooks.js";
import { subscribeLoggerToProcessEvents } from "auto-fw/logger";
subscribeLoggerToProcessEvents();

export const config = {
  ...hooks,
  specs: ["./features/**/*.feature"],
  logLevel: "silent",
  maxInstances: 1,

  capabilities: [
    {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--headless"],
      },
    },
  ],

  framework: "cucumber",

  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "artifacts/allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
        useCucumberStepReporter: true,
      },
    ],
  ],
  cucumberOpts: {
    require: ["./features/step-definitions/*.js"],
    tagExpression: "not @skip",
  },
};
