
# Full-Stack Event Booking System (Angular + Express + MongoDB)

A comprehensive full-stack application for booking and managing events. Built with Angular 19 (frontend), Express (backend), and MongoDB for data storage.
## Demo

- Frontend Demo: [https://atc-01503933454.vercel.app/](https://atc-01503933454.vercel.app/)
- Backend API: [https://areeb-back-2025.vercel.app/](https://areeb-back-2025.vercel.app/)

##Admin Test
- username: Admin
- password: admin@123
## Technologies Used

### Frontend (Angular 19)

- Angular CLI v19.x
- PrimeNG for UI components
- TypeScript 5.x
- SCSS / CSS
- Angular Router
- JWT for authentication
- `angular-cli-ghpages` for deployment

### Backend (Node.js + Express)

- Node.js v18+
- Express v5.1.0
- Mongoose v6.0.0
- MongoDB
- JWT for authentication
- bcrypt for password hashing
- CORS
- dotenv for environment configurations

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Mohamed-Elseglaby/ATC_01503933454.git
cd ATC_01503933454
```

## Backend Setup (Node.js + Express)

### Navigate to the backend folder

```bash
cd backend
```

### Install dependencies

```bash
npm install
```

### Run the server

```bash
npm run dev
```

- Server runs on: `http://localhost:5000`

## Frontend Setup (Angular 19)

### Navigate to the frontend folder

```bash
cd ../frontend
```

### Install dependencies

```bash
npm install
```

### Angular Dependencies

Key dependencies used in the Angular project:

```json
"dependencies": {
  "@angular/animations": "^19.0.0",
  "@angular/common": "^19.0.0",
  "@angular/compiler": "^19.0.0",
  "@angular/core": "^19.0.0",
  "@angular/forms": "^19.0.0",
  "@angular/platform-browser": "^19.0.0",
  "@angular/platform-browser-dynamic": "^19.0.0",
  "@angular/router": "^19.0.0",
  "rxjs": "^7.8.0",
  "zone.js": "^0.14.0",
  "primeng": "^16.0.0",
  "primeicons": "^6.0.0"
}
```

### Run the Angular app

```bash
ng serve
```

- App runs on: `http://localhost:4200`

## Angular Configuration Highlights

- Project name: `areeb-task`
- Output path: `dist/areeb-task`
- Assets folder: `public/`
- Styles used:
  - `src/styles.css`
  - `primeng.min.css`
  - `primeicons.css`

```jsonc
"styles": [
  "src/styles.css",
  "node_modules/primeng/resources/primeng.min.css",
  "node_modules/primeicons/primeicons.css"
]
```

## Build and Deploy

### Build Angular for production

```bash
ng build --configuration production
```

## Environment Configuration

### Backend `.env` Sample

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27019/event-booking
JWT_SECRET=your_jwt_secret
```

### Frontend `environment.ts` (optional for API URL)

```ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:4000/api'
};
```

## Backend API Routes

The backend API provides the following routes:

### Authentication Routes

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user

### Event Routes

- `GET /api/events` - Retrieve all events
- `GET /api/events/:id` - Retrieve a specific event by ID
- `POST /api/events` - Create a new event
- `PUT /api/events/:id` - Update an existing event
- `DELETE /api/events/:id` - Delete an event

### Booking Routes

- `POST /api/bookings` - Create a new booking
- `GET /api/bookings` - Retrieve all bookings for the authenticated user
- `GET /api/bookings/:id` - Retrieve a specific booking by ID
- `DELETE /api/bookings/:id` - Cancel a booking

> Note: All routes under `/api/events` and `/api/bookings` require authentication via JWT.

## Final Setup Checklist

- [x] Angular 19 with PrimeNG
- [x] Express backend with MongoDB
- [x] JWT authentication
- [x] CORS enabled
- [x] MongoDB connection setup
- [x] Event CRUD operations
- [x] User booking system
- [x] Deployment-ready

## Author

**Mohamed Elsayed Mohamed**  
- Front-End Instructor & Angular Developer  
- GitHub: [Mohamed-Elseglaby](https://github.com/Mohamed-Elseglaby)  
- LinkedIn: [mohamed-elseglaby](https://www.linkedin.com/in/mohamed-elseglaby/)
