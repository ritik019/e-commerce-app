# E-Commerce Application

A full-stack e-commerce application built with React, Node.js, Express, and MongoDB.

## Features

- User Authentication (Login/Register)
- Admin Dashboard
- Product Management (CRUD operations)
- Shopping Cart
- Secure Checkout with Stripe
- Order History
- Responsive Design

## Tech Stack

### Frontend
- React
- Redux Toolkit for state management
- Tailwind CSS for styling
- Axios for API calls
- React Router for navigation

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Stripe for payments

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/ritik019/e-commerce-app.git
cd e-commerce-app
```

2. Install Backend Dependencies
```bash
cd backend
npm install
```

3. Install Frontend Dependencies
```bash
cd frontend
npm install
```

4. Set up environment variables
Create a `.env` file in the backend directory with:
```
PORT=5001
MONGODB_URI=mongodb://127.0.0.1:27017/ecommerce
JWT_SECRET=mysupersecretkey123456789
STRIPE_SECRET_KEY=your_stripe_secret_key
```

Create a `.env` file in the frontend directory with:
```
REACT_APP_API_URL=http://localhost:5001/api
REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

5. Run the application
Backend:
```bash
cd backend
npm start
```

Frontend:
```bash
cd frontend
npm start
```

The application will be available at:
- Frontend: http://localhost:3002
- Backend API: http://localhost:5001

## Admin Access
To access admin features:
1. Register a new account
2. Use the provided admin creation script:
```bash
cd backend
node createAdmin.js
```

Admin credentials:
- Email: admin@example.com
- Password: admin123456

## Features

### User Features
- Browse products
- Add products to cart
- Manage cart items
- Secure checkout
- View order history
- Update profile

### Admin Features
- Add/Edit/Delete products
- View all orders
- Manage user accounts
- Access sales analytics

## API Endpoints

### Auth Routes
- POST /api/auth/register - Register new user
- POST /api/auth/login - User login

### Product Routes
- GET /api/products - Get all products
- GET /api/products/:id - Get single product
- POST /api/products - Add new product (Admin)
- PUT /api/products/:id - Update product (Admin)
- DELETE /api/products/:id - Delete product (Admin)

### Order Routes
- POST /api/orders - Create new order
- GET /api/orders - Get user orders
- GET /api/orders/:id - Get order details

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
