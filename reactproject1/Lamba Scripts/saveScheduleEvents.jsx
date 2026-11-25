import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";
import crypto from "crypto";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

const TABLE_NAME = "ScheduleEvents"; 

export const handler = async (event) => {
    try {
        
        const requestBody = event.body ? JSON.parse(event.body) : {};

        const eventId = crypto.randomUUID();

        const item = {
            eventId: eventId,
            startDate: requestBody.startDate || "",
            startTime: requestBody.startTime || "",
            endDate: requestBody.endDate || "",
            endTime: requestBody.endTime || "",
            isAllDay: requestBody.isAllDay || false,
            eventTitle: requestBody.eventTitle || "",
            eventDescription: requestBody.eventDescription || "",
            notificationReminder: requestBody.notificationReminder || true,
            createdAt: new Date().toISOString()
        };

        const command = new PutCommand({
            TableName: TABLE_NAME,
            Item: item,
        });

        await docClient.send(command);

        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*" 
            },
            body: JSON.stringify({
                message: "Event saved successfully!",
                eventId: eventId
            }),
        };
    } catch (error) {
        console.h("Error saving event:", error);
        return {
            statusCode: 500,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({ error: error.message }),
        };
    }
};