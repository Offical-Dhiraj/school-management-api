# 📚 School Management API

## 🚀 Overview

This project provides APIs to manage school data using Node.js, Express, and MySQL. It allows users to add schools and retrieve them sorted by proximity.

---

## 🛠 Tech Stack

* Node.js
* Express.js
* MySQL
* Joi (Validation)

---

## 📌 Features

* Add new school
* Get schools sorted by distance
* Input validation
* Clean architecture

---

## ⚙️ Setup Instructions

### 1. Clone repo

git clone https://github.com/YOUR_USERNAME/school-management-api.git

### 2. Install dependencies

npm install

### 3. Create `.env`
```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=school_db
```

### 4. Run server

npx nodemon server.js

---

## 📡 API Endpoints

### ➕ Add School

POST /api/addSchool

Body:
{
"name": "ABC School",
"address": "Delhi",
"latitude": 28.7041,
"longitude": 77.1025
}

---

### 📍 List Schools

GET /api/listSchools?latitude=28.6&longitude=77.2

---

## 📏 Distance Calculation

Uses Haversine Formula to calculate geographical distance.

---

## 🧪 Testing

Use Postman collection for testing APIs.

---

## 👨‍💻 Author

Dhiraj Kumar
