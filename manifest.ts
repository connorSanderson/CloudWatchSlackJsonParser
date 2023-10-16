import { Manifest } from "deno-slack-sdk/mod.ts";
import { parseCloudWatchJsonFunction } from "./functions/parse-json.ts";
/**
 * The app manifest contains the app's configuration. This
 * file defines attributes like app name and description.
 * https://api.slack.com/future/manifest
 */
export default Manifest({
  name: "cloudwatch-json-parser",
  description: "A blank template for building Slack apps with Deno",
  icon: "assets/default_new_app_icon.png",
  functions: [parseCloudWatchJsonFunction],
  workflows: [],
  outgoingDomains: [],
  botScopes: ["commands", "chat:write", "chat:write.public"],
});


