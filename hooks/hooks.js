import onError from "./onError.js";
import { logger, startLoggingForTest, stopLoggingForTest } from "auto-fw/logger";

const hooks = {
  beforeScenario: async function (world) {
    startLoggingForTest(world.pickle.name);
    logger.info(`Scenario Started: ${world.pickle.name}`);
  },

  beforeStep: function () {},

  afterStep: async function (step, scenario, { error }) {
    if (error) {
      logger.error(error);
      await onError(scenario.name);
      throw error;
    }
  },

  afterScenario: async function (world) {
    logger.info(`Scenario Ended: ${world.pickle.name}`);
    stopLoggingForTest();
    await browser.deleteCookies();
    await browser.execute(() => localStorage.clear());
  },
};
export default hooks;
