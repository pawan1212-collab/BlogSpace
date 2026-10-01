# BlogSpace Backend

Node.js + Express.js REST API for BlogSpace.

## Setup

```bash
npm install
npm start
```

Development:
```bash
npm run dev
```

Server: http://localhost:5000

## API endpoints

- GET `/`
- POST `/api/auth/register`
- POST `/api/auth/login`
- POST `/api/blogs`
- GET `/api/blogs`

This starter uses in-memory arrays, so data is lost when the server restarts. Use a database and password hashing for production.
