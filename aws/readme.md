## AWS

### What is ARN?
-  Amazon Resource Name (ARN).
- 

### Delete an API in API Gateway
Use the API Gateway console to delete an API.
**Warning**
Deleting an API means that you can no longer call it. This action cannot be undone.
Delete an API with the API Gateway Console
You must have deployed the API at least once. Follow the instructions in Deploying a REST API in Amazon API Gateway.
  - Sign in to the API Gateway console at https://console.aws.amazon.com/apigateway.
  - In the box that contains the name of the API you want to delete, choose Resources.
  - Choose Delete API.
  - When prompted to delete the API, choose Ok.
#### How to resolve: CloudWatch Logs role ARN must be set in account settings to enable logging (Service: AmazonApiGateway; Status Code: 400; 
Error Code: BadRequestException; Request ID: 1f4f12f4-3beb-11e9-b5e0-79ca47f43a39)
  - Above error occurs When i add "API Gateway" trigger.
  - **Solution:**
    - *Root Cause*: Enable metrics and error logging: Yes, You should enable CloudWatch Logs.
    - Go to https://console.aws.amazon.com/iam/home#/roles/
    - Create a new rol for mazonAPIGatewayPushToCloudWatchLogs and asign it into Gateway API.
    
**Set up API Logging Using the API Gateway Console**
To set up API logging, you must have deployed the API to a stage. You must also have configured an appropriate CloudWatch Logs role ARN for your account.
- Sign in to the API Gateway console at https://console.aws.amazon.com/apigateway.
- Choose Settings from the primary navigation panel. Type an ARN of an IAM role with appropriate permissions in CloudWatch log role ARN. You need to do this once.
- Do one of the following:
  - Choose an existing API and then choose a stage.
  - Create an API and deploy it to a stage.
- Choose Logs/Tracing in the Stage Editor.
- To enable execution logging, choose Enable CloudWatch Logs under CloudWatch Settings. Choose Error or Info from the drop-down menu. If desired, choose Enable Detailed CloudWatch Metrics.
For more information about CloudWatch metrics, see Monitor API execution with Amazon CloudWatch.
- To enable access logging, choose Enable Access Logging under Custom Access Logging. Then type the ARN of a log group in CloudWatch Group. Type a log format in Log Format. You can choose CLF, JSON, XML, or CSV to use one of the provided examples as a guide.
- Choose Save Changes.
    
### Newly created api url return "{"message": "Internal server error"}". (https://Mykey.execute-api.ap-south-1.amazonaws.com/default/testgo?name=test)
**How debug issue?**
- *root Cause:* Execution failed due to configuration error: Malformed Lambda proxy response
- Go to Gateway API > Your API > Resource > Click 'ANY' > Run test. 



  
