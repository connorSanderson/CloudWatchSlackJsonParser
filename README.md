# CloudWatchSlackJsonParser
Slack JSON parser to display readable CloudWatch alarms 

1. Create a Slack Workflow with a webhook
2. Create an SNS topic and create a subscription using the slack workflow's webhook
3. To validate the subscription configure the workflow to send a message to a channel using the variable SubscribeURL - the variable name has to be exact
4. Once its validated, remove the SubscribeURL variable and add the Message variable instead. The message will be the JSON output from CloudWatch Alarms
5. The function in functions/parse-json.ts extracts the AlarmName, AlarmDescription and NewStateReason from the JSON message and sends it to a desired slack channel
![alt text](https://github.com/connorSanderson/CloudWatchSlackJsonParser/blob/main/slack_workflow.png?raw=true)
