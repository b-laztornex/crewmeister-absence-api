# Crewmeister API

This is a Node.js/Express CRUD API for managing absences and members, using PostgreSQL as the database. Both the API and the database are dockerized.

## Features

- **CRUD Endpoints:** Create, Read, Update, Delete operations for absences and members.
- **PostgreSQL Database:** Data is persisted in a PostgreSQL database.
- **Dockerized:** Both the API and the PostgreSQL database run in Docker containers.
- **Seed Data:** On first run, the database is seeded with sample data from `db/seed.sql`.

## Prerequisites

- [Docker](https://www.docker.com/get-started) installed locally.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/crewmeister-api.git
   cd crewmeister-api

   ```

2. Create a .env file:

Create a .env file in the root with the following content:

```js
PORT = 3000;
PGHOST = postgres;
PGUSER = postgres;
PGPASSWORD = postgres;
PGDATABASE = crewmeister_db;
PGPORT = 5432;
```

3. Build and Run the Application:

```js
docker-compose up --build
```

4. API Endpoints:

# Absences:

```js
GET /api/absences – Get all absences.
GET /api/absences/:id – Get a specific absence.
POST /api/absences – Create a new absence. *nice to have
PUT /api/absences/:id – Update an absence. *nice to have
DELETE /api/absences/:id – Delete an absence. *nice to have
```

# Members:

```js
GET /api/members – Get all members.
GET /api/members/:id – Get a specific member.
POST /api/members – Create a new member. *nice to have
PUT /api/members/:id – Update a member. *nice to have
DELETE /api/members/:id – Delete a member. *nice to have
```
