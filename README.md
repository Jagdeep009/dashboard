# Admin Dashboard - React.js Project

This is an admin dashboard application built using React.js, React Router DOM, and Redux for state management. The application is designed to manage user authentication, user roles, and user profiles. It includes protected routes, dummy API calls for CRUD operations, and role-based access control for different routes.

## Features

- **Authentication:** 
  - Uses Redux for managing user authentication state.
  - Protected routes based on authentication (users must be logged in to access certain pages).
  
- **Routes:**
  - **User:** Manage user data (CRUD operations).
  - **Role Management:** Manage user roles and permissions.
  - **User Profile:** View and edit the current logged-in user's profile.

- **API Calls:**
  - Dummy API calls are used to perform CRUD operations on user data, roles, and profile management.

- **Protected Routes:**
  - All routes are protected using an `AuthLayout` to ensure that only authenticated users can access certain routes.

## Tech Stack

- **Frontend:** React.js, React Router DOM, Redux, Axios (for API calls)
- **State Management:** Redux
- **Styling:** Bootstrap (or any preferred CSS framework)
- **Routing:** React Router DOM
- **API:** Dummy API (simulating CRUD operations)