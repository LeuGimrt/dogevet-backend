# Dogevet backend

<img src="https://user-images.githubusercontent.com/51771490/166619932-d7b65038-3942-4241-bc2f-fb26fd2e65d0.png" width="400">

Dogevet is a web application for managing pet consultations. It supports authentication, authorization, consultations management, file uploads and more.

The backend was made with NodeJS, TypeScript, Express, and uses Prisma ORM to connect to a PostgreSQL database. 
It exposes a REST API that allows requests to be made from a client. 
You can find the client application [here](https://github.com/LeuGimrt/dogevet-frontend).

## Prerequisites

- NodeJS >= 16.0.0 installed.
- PostgreSQL database server running.

## Running the server

### Setting up the environment

Create a .env file:
```
DATABASE_URL=postgresql://<user>:<password>@localhost:<port>/<dbname>
ACCESS_TOKEN_SECRET=<secret key for jwt>
CLIENT_URL=<cors origin | default: http://localhost:3000>
```

### Install all the packages

```
npm install
```
or (if you're using yarn):
```
yarn
```

### Start the server
```
npm run dev
```
or (if you're using yarn):
```
yarn dev
```
It should start running on localhost:5000 🤓
