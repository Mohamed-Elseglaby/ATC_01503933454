# Areeb Event Booking System

A full-stack event booking system built with **Angular 19**, **Node.js + Express**, and **MongoDB**. Supports JWT authentication, role-based access, booking events, and admin event management.

---

## 🌐 Live Demos

* **Frontend:** [https://atc-01503933454.vercel.app](https://atc-01503933454.vercel.app)
* **Backend API:** [https://areeb-back-2025.vercel.app](https://areeb-back-2025.vercel.app)

---

## 🧪 Admin Test Account

* **Username:** Admin
* **Password:** admin\@123

---

## ✅ Project Features Checklist

### 📌 Core Features

| Feature                                   | Status |
| ----------------------------------------- | ------ |
| 🔐 User Authentication (Login / Register) | ✅      |
| 🏠 Home Page (Event Listings)             | ✅      |
| ➕ Book Event Button                      | ✅      |
| 📄 Event Details Page                     | ✅      |
| 🎉 Booking Confirmation Screen            | ✅      |
| 🧾 Admin Panel for Events                 | ✅      |
| 👥 Role-Based Access (Admin/User)         | ✅      |
| 🌐 Deployed Backend (Vercel)              | ✅      |
| 🌐 Deployed Frontend (Vercel)             | ✅      |

### 🎨 UI & UX

| Feature                           | Status       |
| --------------------------------- | ------------ |
| Web-only UI                       | ✅           |
| Custom Design (No templates used) | ✅           |
| Dark Mode                         | ✅           |

### 🛠 Backend

| Feature                              | Status |
| ------------------------------------ | ------ |
| JWT Authentication                   | ✅      |
| RESTful API (Events, Auth, Bookings) | ✅      |
| Password Encryption (bcrypt)         | ✅      |

### 🎯 Optional Enhancements

| Feature                   | Status                       |
| ------------------------- | ---------------------------- |
| Tags / Categories         | ✅ Basic category implemented |
| Image Upload              | ✅ Via external URLs          |

### 🚀 Bonus

| Feature                        | Status |
| ------------------------------ | ------ |
| Backend Deployed               | ✅      |
| Frontend Deployed              | ✅      |
| Unit Testing (Karma + Jasmine) | ✅      |

---

## 🧪 Unit Testing Results

> ✔ **22 specs passed, 0 failures** using **Karma + Jasmine**

Components tested:

* `EventDetailComponent`
* `LoginComponent`
* `RegisterComponent`
* `DashboardComponent`
* `BookingService`
* `AuthService`
* `NavbarComponent`
* and more...
![image](https://github.com/user-attachments/assets/db69124a-cc38-4e17-b3b1-3467e8c72380)

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Mohamed-Elseglaby/ATC_01503933454.git
cd ATC_01503933454
```

### 2. Backend Setup

```bash
cd backend
npm install
npm run dev
# Server: http://localhost:5000
```

#### Sample `.env`

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/event-booking
JWT_SECRET=your_jwt_secret
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
ng serve
# App: http://localhost:4200
```

---

## 🔗 API Routes Overview

### Auth

* `POST /api/auth/register`
* `POST /api/auth/login`

### Events

* `GET /api/events`
* `GET /api/events/:id`
* `POST /api/events`
* `PUT /api/events/:id`
* `DELETE /api/events/:id`

### Bookings

* `POST /api/bookings`
* `GET /api/bookings/user`
* `DELETE /api/bookings/:id`

> ⚠ All routes require JWT except registration and login.

---

## 👨‍💻 Author

**Mohamed Elsayed Mohamed**
Front-End Instructor & Angular Developer
🔗 GitHub: [Mohamed-Elseglaby](https://github.com/Mohamed-Elseglaby)
🔗 LinkedIn: [mohamed-elseglaby](https://www.linkedin.com/in/mohamed-elseglaby/)
