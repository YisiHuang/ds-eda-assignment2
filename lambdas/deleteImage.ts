import { SNSHandler } from "aws-lambda";
import { DeleteCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

const ddbDocClient = createDDbDocClient();

export const handler: SNSHandler = async (event) => {
  for (const record of event.Records) {
    const message = JSON.parse(record.Sns.Message);

      if (message.Records) {
        for (const messageRecord of message.Records) {
          const s3e = messageRecord.s3;
          const srcKey = decodeURIComponent(s3e.object.key.replace(/\+/g, " "));

          const deleteCommand = new DeleteCommand({
          TableName: "Images",
          Key: {
            ImageName: srcKey,
          },
        });

        await ddbDocClient.send(deleteCommand);
      }
    }else if(message.name) {
        const commandOutput = await ddbDocClient.send(
          new DeleteCommand({
            TableName: "Images",
            Key: {
                ImageName: message.name
            }
          })
      )
    }
  }
};

function createDDbDocClient() {
    const ddbClient = new DynamoDBClient({ region: process.env.REGION });
    const marshallOptions = {
      convertEmptyValues: true,
      removeUndefinedValues: true,
      convertClassInstanceToMap: true,
    };
    const unmarshallOptions = {
      wrapNumbers: false,
    };
    const translateConfig = { marshallOptions, unmarshallOptions };
    return DynamoDBDocumentClient.from(ddbClient, translateConfig);
  }