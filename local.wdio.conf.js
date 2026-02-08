import hooks from "./hooks/hooks.js";
import { subscribeLoggerToProcessEvents } from "auto-fw/logger";
import { loadEnv } from "./utils/loadEnv.js";

loadEnv(".env.local");

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
        args: ["--user-data-dir=C:\\chrome-wdio-profile"],
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
