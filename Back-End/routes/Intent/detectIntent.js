const express = require('express')
const router  = express.Router()
const credentials = require ('../../Cred.js');


async function detectIntent(req,res) {
const dialogflow = require('dialogflow');
const uuid = require('uuid');
let text = req.body.text; 
const sessionId = uuid.v4();
const userData = {
  project_id : 'chatbot-perennial-243513',
config :{
  credentials :{
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDAq+b6BLVfbThN\nSgwVMdZP2Zbc3Tcoo393ETfrgJERdqeVv8+tX7mjf9oeUJNND2G8RqNL6lcAyrn/\nxl5nVPS2J8FVjTV98P0bgH4EDTxkhmOVzRbjysDCsY3B3qZPygfIJa+mRDDa5Wyl\nNt6JZZo35VX2mZ3SEHjsZaGAN/haxNqQSC9x44hsZklzvzJiwisK6hL7O+lqVNwz\nPeuVOR2FVPmLIB57TwaJfVRwUva3OJt6lpPpeIpi0PqBFvr4STlO5h1nLR92XWWr\nOfICrAzEpUKpwnY1ngPyTXGJINyxAZdNa44tV3GJsNE3y+naI3cNEdXTayex8Ng3\nf1wuaFhVAgMBAAECggEARvLGMkjrlQE+G0/qFR/uACdq41feiOtz8592jRUh1mFw\nIreoPPqj/G4HHuSi6VyBq/gDB+B6O0NrrKEagEiLeEw5aEyAZykHu0ncnZdWJtpJ\n746/IBC4XLlPLxXS/kyyAuTFwp8XsnOLR2dmGQg9+tlLh2xX7lO8g6iFCRcTMDDq\nvmRIusQWw6wZsAKJGoVtPsFarojzE7FZH16XsEvkdG80w+BGTRBS2XgLAYo20sw5\nkYXt3DKAOVcBuSNUyR6C7/vg4GOURWUlPKKVq44XCIbb9udSdD9OGKiJfrRxfNAn\nyPUG7iKdv/doJVk0KDMNCMnMnjRhBshzPhp9CHrSPQKBgQD1Wu1pmg16greZePi9\n3hZjPhxP1cLQR9LuMFMG2Hx9bMQnUfaJZOnBfJaXT05sHnutwyLg7ZHMxtNTaX2J\nqN2DFlkA/dNHtkYL4ruwIYN+JiRQCI7lhk1dBGil7EI7wtnVkxC9ulhBCVrX1xWS\nXcmYDv48x5r9xwfqi9Qc6r9mJwKBgQDJB9X7aZGzv5TEv6e2WaPLkxG+WlCXPr2/\n4Xab+p31672Kua0ujwhK5cUeDAhzrEGIqHJ27nJbbKqn7b13wUsPZWc+CSH0FZNh\nyKoxI4jT94lrEvfJNUuOf+z7pz6rnBX+KOw1Apxz2DW5mF486KJUvd5qjUAjWYCp\ny6TZYD03IwKBgQCyMSiN8olpeXg4aUhWNO6Tgy9yt+/17sP9o3EZXq8DNLQ9TmS8\nImM21/JS0BFHqtfuOfOh4khqrdgbE1lOWisOonNfqfkBcxrqVPA1GhHy02a6DY0i\nm2iibqpGHxF3b6tfVqDo+mZQTagBbD9Jfv4DhpgUsm8ZcqyIJqeVnNQHLwKBgF8m\n4lW5xkk6KQRnYs6g5zJ4TjG3NeYgwFeONEHoAdRg3LpI4HvlH5uz3fU25Nk7c1ln\nwaYhfudfK/eIQ+HnD8wdxxxJ3lRV0gi6njPcCeuqgtS3iaknHLg6PMVwh+1aV96R\nKBx/O+ZpNCTAxfo2cn+Bz0DH0s/okUnNJh3tu4vZAoGBAMB9eJZAwYm7IzWT6s14\nHdNEhOyymejv746ZJr9ly1Ldm6SMwNZAMN875dC1rRmJMMp+0s3f28wo92O3Yf7Y\nnsLGE7H6/yxLCxECRPHbS+cQ6dEGnmksDqI/KvkTqo6QzVKB2c/vv1gl7L2LYLAC\nq4lA7Q478xfddaUvNWn1R559\n-----END PRIVATE KEY-----\n",
  client_email: "dialogflow-rvseim@chatbot-perennial-243513.iam.gserviceaccount.com"
    }
  }
}
// Create a new session
const sessionClient = new dialogflow.SessionsClient(userData.config);
const sessionPath = sessionClient.sessionPath(userData.project_id, sessionId);
// The text query request.
const request = {
  session: sessionPath,
  queryInput: {
    text: {
      // The query to send to the dialogflow agent
      text: `${text}`,
      // The language used by the client (en-US)
      languageCode: 'en-US',
    },
  },
};

// Send request and log result
const responses = await sessionClient.detectIntent(request);
console.log('Detected intent');
const result = responses[0].queryResult;
console.log(`  Query: ${result.queryText}`);
console.log(`  Response: ${result.fulfillmentText}`);
if (result.intent) {
  console.log(`  Intent: ${result.intent.displayName}`);
} else {
  console.log(`  No intent matched.`);
}
const responsetouser = result.fulfillmentText;
//  return responsetouser;
let respData = {
data: responsetouser
};
res.send(respData);
}

module.exports = {
  detectIntent : detectIntent
}