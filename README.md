# Flight Search Service ✈️

The **Flight Search Service** is a dedicated microservice for managing all flight search operations in a flight booking system. Built with **Node.js, Express, MySQL, Sequelize ORM**, and **JWT** for authentication, it handles high-volume search requests efficiently while separating booking logic into a different microservice to ensure scalability and reliability.

This microservice is part of a larger flight booking platform where search and booking requests are handled independently, preventing downtime during high traffic periods (e.g., holiday seasons).

---

## 🚀 Features

* **Flight Management**: Create, update, and manage flights, cities, and airlines.
* **High-Performance Search**: Optimized search for flights based on source, destination, date, and other criteria.
* **Microservice Architecture**: Separates search and booking functionalities for reliability under heavy traffic.
* **Inter-Service Communication**: Supports communication with Flight Booking Service for coordinated actions.
* **Secure Authentication**: JWT-based user authentication for secure access to search endpoints.
* **Database Management**: MySQL with Sequelize ORM for structured and efficient data operations.

---

## 🏗️ Architecture Overview

1. **Frontend Requests** → Load Balancer → API Gateway (Reverse Proxy) → Appropriate Microservice.
2. **Flight Search Service** handles all search-related requests, returning flight data.
3. **Flight Booking Service** handles booking requests, interacting with the search service if needed (e.g., adding extra seats).
4. Database transactions ensure data consistency during concurrent booking attempts, preventing race conditions.

This separation ensures that **heavy search traffic does not impact booking operations** and the system remains reliable during peak periods.

---

## ⚡ Tech Stack

* **Backend**: Node.js, Express.js
* **Database**: MySQL, Sequelize ORM
* **Authentication**: JWT
* **Architecture**: Microservices with API Gateway & Load Balancer
* **Other**: RESTful APIs, Async operations for high performance

---

## 🔧 Setup & Installation

1. Clone the repository:

```bash
git clone https://github.com/Bhupesh-aher/Flights-.git
```

2. Navigate to the project folder:

```bash
cd Flights-
```

3. Install dependencies:

```bash
npm install
```

4. Set up `.env` file with your database and JWT configurations.

5. Run database migrations (Sequelize CLI):

```bash
npx sequelize db:migrate
```

6. Start the server:

```bash
npm start
```

Server should now be running on `http://localhost:PORT`

---

## 📁 API Endpoints

### Flights

* `POST /flights` – Create a new flight
* `GET /flights` – Get all flights or search based on query parameters
* `GET /flights/:id` – Get flight by ID
* `PUT /flights/:id` – Update flight details
* `DELETE /flights/:id` – Delete flight

### Cities

* `POST /cities` – Add a city
* `GET /cities` – List all cities

### Airlines

* `POST /airlines` – Add an airline
* `GET /airlines` – List all airlines

### Authentication

* `POST /auth/register` – User registration
* `POST /auth/login` – User login (returns JWT)

> Note: All endpoints are secured via JWT authentication where applicable.

---

## ⚙️ Concurrency Handling

* Implements **row-level locking** to prevent race conditions during simultaneous bookings.
* Ensures that even under high search traffic, the booking process remains consistent and reliable.

---

## 📈 Why Microservice Separation?

* **Scalability**: Flight search traffic is typically higher than booking traffic.
* **Reliability**: Failure in one service (e.g., search) does not crash booking operations.
* **Maintainability**: Independent services are easier to manage, update, and deploy.

---

## 📂 Future Improvements

* Integrate **caching** for frequent search queries to reduce DB load.
* Add **pagination and filtering** for search results.
* Implement **rate limiting** to protect against abuse during peak traffic.

---

## 📌 References

* Node.js: [https://nodejs.org/](https://nodejs.org/)
* Express.js: [https://expressjs.com/](https://expressjs.com/)
* MySQL: [https://www.mysql.com/](https://www.mysql.com/)
* Sequelize: [https://sequelize.org/](https://sequelize.org/)
* JWT: [https://jwt.io/](https://jwt.io/)
