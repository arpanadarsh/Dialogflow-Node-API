# Dialogflow-Node-API
# Generic Chatbot Creator

Generic Chatbot Creator is a node library which can be implemented to create your own chatbot using Dialogflow. We have implemented all the functionalities of Dialogflow in a more usable and easily comprehensible manner. REST API's of all the functionalities like Creation/Deletion of Intents, Entity, EntityType, Knowledge Base and Contexts are all included with this package.

## Compatibility
This Package is compatible with other frameworks and other Database Providers. Currently, we have added support for Express JS Framework (in the code provoded in this repository) and MYSQL Database using ORM sequelize. 
We have used Angular and CoreJS for the Front-End.

## Installation

For Getting Started You Need to have Node 8.0 or above. We have provided the package.json in Back-End as well as Front-End.

$ mkdir Dialogflow-Chatbot

$ cd Dialogflow-Chatbot

$ npm init --yes

```bash
npm install 
```

## Usage

### Dialogflow
```C
1. Create an Agent on https://console.dialogflow.com/
2. After the Agent is created on Dialogflow, click on the settings icon
just beside the Agent name. Enable Beta features.
3. Click on the service account provided in the service account window.
You'll be redirected to Google Cloud Platform.
```
### Google Cloud Platform
```bash
6. Create service account key on Google Cloud Platform. A key will be 
created and an option to download a JSON file will be given. Download 
the JSON file and save it at a secure directory.
7. Next, Go to IAM in GCP and enable API permissions for Dialogflow. 
Once the API is enabled, an option as manage API will be displayed. 
Click on Manage API and give permissions to the particular project as 
Project Owner.
8. The JSON file dowloaded contains all the keys of the Dialogflow Agent.credentials
```
### REST API's
```Javascript
1. Start Mysql server. Run command 
$ docker-compose -f mysql-container.yml up

1. Create a Schema in Mysql.
2. Pass Schema credentials in app.js environment variables(Back-End)
Start server - 
# Back-End : $ app.js
# Front-End : $ ng serve
```
### Client Side
```bash
Hit url in browser : http://localhost:4200/signin
Step 1 - Create Admin from postman
Step 2 - Sign with the credentials to Admin Panel.
Step 3 - Create Agent with the required fields. Copy client_email and private_key
from JSON file downloaded. Agent Created successfully.
Step 4 - Sign with the credentials created for Agent. You are ready to use Dialog-
flow Node API Chatbot bot creator.

To use the chatbot, start index.html in the Front-End directory. 
```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
