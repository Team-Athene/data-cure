 import { HuddleClient } from "@huddle01/web-core";
import { ENV_CONSTANTS } from "~/utils/constants";

export function initHuddle() {
    const huddleClient = new HuddleClient({
        projectId: ENV_CONSTANTS.HUDDLE_PROJECT_ID,
        options: {
          activeSpeakers: {
            size: 10,
          },
        },
      });
    return huddleClient;
}