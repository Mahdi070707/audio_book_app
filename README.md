# Project2 Authentication System

This project implements a user authentication system using various strategies including Google, Apple, and Microsoft. It is built with Node.js and Express, utilizing Passport.js for handling authentication.

## Project Structure

```
Project2
├── src
│   ├── login.ts          # Main logic for user authentication
│   └── views
│       └── login.html    # HTML structure for the login page
├── package.json          # npm configuration file
├── tsconfig.json         # TypeScript configuration file
└── README.md             # Project documentation
```

## Features

- **Google Authentication**: Users can log in using their Google accounts.
- **Apple Authentication**: Users can log in using their Apple accounts.
- **Microsoft Authentication**: Users can log in using their Microsoft accounts.
- **Local Authentication**: Users can log in with an email and password.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd Project2
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the server:
   ```
   npm start
   ```
2. Open your browser and go to `http://localhost:3000` to access the login page.

## Configuration

- Update the `clientID`, `clientSecret`, and other credentials in `src/login.ts` for Google, Apple, and Microsoft authentication.
- Ensure that the callback URLs are correctly set in your respective developer console for each authentication provider.

## License

This project is licensed under the MIT License.

test
test
test