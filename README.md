# patronage-api
<p align="center">
<img width="100" alt="image" src="https://github.com/noraliucode/cron/assets/12429503/c60bd905-7164-4099-908b-832e8ef3c81c">
</p>

## Overview
This project is the backend API for the CryptoPatronage platform. CryptoPatronage is a platform that helps creators build a membership program by offering their followers exclusive content and a closer connection with their community. This API server is built with Node.js, Express.js, and MongoDB. It provides basic CRUD (Create, Read, Update, Delete) operations for a MongoDB collection named 'data'. The server also integrates JWT for authentication on specific routes.

## Tech Stack
- Node.js: The runtime environment for executing JavaScript on the server side.
- Express.js: A web application framework used to build the API server.
- MongoDB: The NoSQL database used to store data.
- JSON Web Tokens (JWT): Used for user authentication.

## Environment Variables
- `SECRET_KEY`: The secret key used to sign and verify JWT tokens. 
- `PORT`: The port on which the server runs. Defaults to 3000 if not provided.
- `MONGODB_URI`: The connection string for the MongoDB database.

## Setup
1. Install dependencies:
    `yarn install`
2. Set environment variables as described above.
3. Run the server:
    `yarn start`

## Endpoints
### GET /data
Fetches all documents from the 'data' collection. Returns an array of documents.

### POST /data
Creates a new document in the 'data' collection with the provided request body. Returns the created document.

### GET /data/:id
Fetches a specific document from the 'data' collection using the provided ID. If the ID is invalid or there is no document with that ID, an error will be returned.

### PATCH /data/:id
Updates a specific document in the 'data' collection using the provided ID. Requires a valid JWT token in the `Authorization` header. If the token is missing or invalid, or if the ID is invalid, an error will be returned.

## Error Handling
Errors are handled by returning an HTTP status code of 500 and a JSON object with an `error` property. For the `PATCH /data/:id` endpoint, other status codes may be returned as follows:
- 401 if no token is provided.
- 400 if the provided ID is invalid.

## Database Functions
The `connectToDb` function connects to the MongoDB database using the provided connection string and stores the database connection in the `dbConnection` variable.
The `getDb` function returns the current database connection.
Note: You should not use `getDb` before `connectToDb` has completed successfully, otherwise `getDb` will return `undefined`.

## Authentication
The project uses JWT for authentication. In the `PATCH /data/:id` route, a token is expected in the `Authorization` header of the request. This token is verified using the `SECRET_KEY` environment variable. If the token is missing or invalid, an error is returned.

