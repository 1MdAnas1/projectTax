# ProjectTax

ProjectTax is a MERN Stack web application for tax-related services and content management. It provides secure authentication using JWT and stores data in MongoDB.

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

---

## Prerequisites

Before running the project, make sure you have installed:

- Node.js (v18 or later recommended)
- MongoDB (Local or MongoDB Atlas)
- npm

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/1MdAnas1/projectTax.git
cd projectTax
```

### 2. Install dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the project root and add the following variables:

```env
PORT=5000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

# First-Time Setup

**Important:** Before starting the application for the first time, you must seed the database.

### Step 1: Seed the Admin

```bash
npm run seed
```

### Step 2: Seed the Initial Content

```bash
npm run seedContent
```

These scripts will populate the database with the required admin account and default content.

---

## Running the Project

Start the development server:

```bash
npm start
```

or (if using nodemon)

```bash
npm run dev
```

The server will start on:

```
http://localhost:PORT
```

For example:

```
http://localhost:5000
```

---


## Available Scripts

Install dependencies:

```bash
npm install
```

Seed admin:

```bash
npm run seed
```

Seed content:

```bash
node run seedContent
```

Start application:

```bash
npm start
```

Development mode:

```bash
npm run dev
```

---

## Notes

- Ensure MongoDB is running before starting the server.
- Seed the database **only once** during the initial setup unless you intentionally want to recreate the default data.
- Keep your `.env` file private and never commit it to GitHub.

---

## Author

**Mohd Anas Siddique**
