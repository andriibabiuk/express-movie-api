# 🎬 Movie REST API

A RESTful API built with **Node.js** and **Express.js** for retrieving, searching, and managing movie-related data. The API provides structured JSON responses, supports advanced querying capabilities, and follows a modular architecture designed for scalability and maintainability.

The service exposes endpoints for movie discovery, detailed movie information, and search functionality, making it suitable for integration with web, mobile, or third-party applications.

---

## 🚀 Features

### 🎥 Movie Data Management

* Retrieve movie collections
* Access detailed movie information
* Browse top-rated movies
* Structured JSON responses

### 🔍 Search Functionality

* Search movies by keyword
* Query movie titles and descriptions
* Pagination support
* Flexible filtering options

### 🛡️ API Access Control

* API key validation
* Protected endpoints
* Request verification

### 🏗️ Modular Architecture

* Separation of routes and data layers
* Reusable middleware architecture
* Organized project structure
* Easy extensibility

---

## 🛠️ Tech Stack

| Category        | Technology                         |
| --------------- | ---------------------------------- |
| Runtime         | Node.js                            |
| Framework       | Express.js                         |
| Template Engine | Jade (Pug)                         |
| API Style       | REST                               |
| Data Source     | Mock Database (JavaScript Modules) |

---

## 📁 Project Structure

```text
.
├── bin/
│   └── www                    # HTTP server bootstrap
│
├── data/
│   ├── movieDetails.js        # Detailed movie records
│   ├── movies.js             # Movie collections
│   └── people.js             # Cast and contributor information
│
├── routes/
│   ├── index.js              # Root routes
│   ├── movie.js              # Movie-related endpoints
│   └── search.js             # Search functionality
│
├── public/                   # Static assets
├── views/                    # Jade templates
│
├── app.js                    # Express application setup
├── package.json              # Dependencies and scripts
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js (v16 or higher)
* npm

Verify installation:

```bash
node -v
npm -v
```

---

### Installation

Clone the repository:

```bash
git clone https://github.com/andriibabiuk/express-movie-api.git
cd express-movie-api
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm start
```

The API will be available at:

```text
http://localhost:3030
```

---

## 📡 API Endpoints

### Root Endpoint

| Method | Endpoint | Description                                |
| ------ | -------- | ------------------------------------------ |
| GET    | `/`      | Returns API information or diagnostic data |

---

### Movie Endpoints

#### Get Top Rated Movies

```http
GET /movie/top_rated?api_key=YOUR_API_KEY
```

Returns a collection of the highest-rated movies.

**Response**

```json
[
  {
    "id": 1,
    "title": "The Shawshank Redemption",
    "rating": 9.3
  }
]
```

---

#### Get Movie Details

```http
GET /movie/:id
```

Returns detailed information about a specific movie.

**Example**

```http
GET /movie/550
```

---

### Search Endpoints

#### Search Movies

```http
GET /search/movie?query=inception&page=1
```

Searches movie titles and descriptions using the provided keyword.

#### Query Parameters

| Parameter | Type   | Description                |
| --------- | ------ | -------------------------- |
| query     | string | Search keyword             |
| page      | number | Page number                |
| limit     | number | Number of results per page |

---

## 🏗️ Architecture Overview

### Request Flow

```text
Client Request
      │
      ▼
 Express Router
      │
      ▼
 Route Handler
      │
      ▼
 Data Layer
      │
      ▼
 JSON Response
```

### Core Components

#### Routing Layer

Responsible for:

* Request handling
* Endpoint organization
* Parameter validation
* Response formatting

#### Data Layer

Provides:

* Movie collections
* Detailed movie metadata
* Contributor information
* Searchable datasets

#### Middleware Layer

Handles:

* Request parsing
* API key validation
* Error handling
* Response processing

---

## 📄 Example Response

```json
{
  "id": 550,
  "title": "Fight Club",
  "release_date": "1999-10-15",
  "rating": 8.8,
  "overview": "An insomniac office worker crosses paths with a charismatic soap salesman."
}
```
