# React Native Management App

## Overview

Welcome to the React Native Management App repository! This mobile application is designed to facilitate user management through a user-friendly interface. Built with React Native, the app supports basic CRUD operations, allowing users to sign up, log in, add, edit, and delete records. It also provides features such as searching, filtering, and local database storage for offline functionality.

## Features

1. **User Authentication:**
   - Sign up with mandatory fields including name, email, phone, gender, source, city, and state.
   - Login with email and password.

2. **Dashboard:**
   - Displays a list of users with details (Username, Email, and Phone).
   - Placeholder image "No Data Found" if no users are added.
   - Floating button or options menu to add new user details.
   - Edit and delete options for each user record.
   - Filtering options (A-Z, Z-A, Last modified, Last Inserted).
   - Search by Name, Mobile, or Email with dynamic list updates.
   - Local database storage for all records.
   - Fetch records from the API if no local records available.
   - Network availability check with a prompt to enable Wi-Fi / Mobile Data.

## Tech Stack

- **Frontend:** React Native
- **Backend:** Node.js 
- **Database:** MongoDB 

## Project Structure

The application consists of two main parts:

- **Backend (API):** Located in the `api` directory.
- **Frontend (Client):** Located in the `client` directory.

## Running the Application Locally

### Backend

1. Navigate to the `api` directory:

   ```bash```
   cd api
Install backend dependencies:

```bash```
npm install
Start the backend server:

```bash```
npm run dev
The backend will be accessible at http://localhost:YOUR_BACKEND_PORT.

Frontend
Navigate to the client directory:

```bash```
cd client
Install frontend dependencies:

```bash```
npm install
Start the frontend development server:

```bash```
npm start
Choose the platform to run the app:

Web:
```bash```
npm run web
The frontend will be accessible at http://localhost:YOUR_FRONTEND_PORT.

Android:
```bash```
npm run android

iOS:
```bash```
npm run ios