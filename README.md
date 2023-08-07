# patronage-api
<p align="center">
<img width="100" alt="image" src="https://github.com/noraliucode/cron/assets/12429503/c60bd905-7164-4099-908b-832e8ef3c81c">
</p>

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
