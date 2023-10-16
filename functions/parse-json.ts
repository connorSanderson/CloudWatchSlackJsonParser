import { DefineProperty, DefineFunction, Schema, SlackFunction } from "deno-slack-sdk/mod.ts";

export const parseCloudWatchJsonFunction = DefineFunction({
  callback_id: "parse-json",
  name: 'parse_cloudwatch_json',
  source_file:  "functions/parse-json.ts",
  title: "Parse CloudWatch Alarm JSON",
  input_parameters: {
    properties: {
      cloudWatchJson:{
        type: Schema.types.object,
        description: "CloudWatch JSON to parse",
      },
    },
    required: ['cloudWatchJson']
  },
  output_parameters: {
    properties: {
      alarmName: { type: Schema.types.string },
      alarmDescription: { type: Schema.types.string },
      newStateReason: { type: Schema.types.string },
    },
    required: ['alarmName', 'alarmDescription', 'newStateReason']
  },
});

export default SlackFunction(
  parseCloudWatchJsonFunction,
  ({ inputs }) => {
    const cloudWatchObject = inputs.cloudWatchJson;
    // Extract the required information
    const alarmName = cloudWatchObject.AlarmName;
    const alarmDescription = cloudWatchObject.AlarmDescription;
    const newStateReason = cloudWatchObject.NewStateReason;

    // Return the extracted information
    return {
      outputs: {
        alarmName,
        alarmDescription,
        newStateReason,
      },
    }
  },
);