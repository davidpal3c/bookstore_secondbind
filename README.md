# Bookstore Application

This is a simple bookstore application built with React and TypeScript. It allows users to view, add, edit, and delete books. The application uses a RESTful API for backend operations and Tailwind CSS for styling.

[<img src="https://iili.io/dyzYcU7.png" width="100%">](https://www.youtube.com/watch?v=3L-1iRHLKBI")


## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/) or any other database you are using

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/bookstore.git
    cd bookstore
    ```

2. **Install dependencies:**

    Using npm:
    ```bash
    npm install
    ```

    Using yarn:
    ```bash
    yarn install
    ```

## Running the Project

1. **Set up environment variables:**

    Create a [`.env`] file in the root directory of the project and add the following environment variables:

    ```env
    DATABASE_URL=your_database_url
    ```

    Replace `your_database_url` with the actual URL of the database: 
    Contact me to request the database credentials to test the application. 

3. **Run the development server:**

    Using npm:
    ```bash
    npm run dev
    ```

    Using yarn:
    ```bash
    yarn dev
    ```

    The application should now be running on `http://localhost:3000`.
## Running the Project

1. **Set up environment variables:**

    Create a [`.env`]in the relative path ".../bookstore/.env" (file) in the root directory of the project and add the following environment variables:

    ```env
    DATABASE_URL=your_database_url
    ```

    Replace `your_database_url` with the actual URL of your database (please contact me for the actual database url).

2. **Run the development server:**

    Using npm:
    ```bash
    npm run dev
    ```

    Using yarn:
    ```bash
    yarn dev
    ```

    The application should now be running on `http://localhost:3000`.


## Environment Variables

The application uses the following environment variables:

- [`DATABASE_URL`]: The URL of the database to connect to.

## Database Setup

1. **Ensure the database is running:**

    Make sure your database server is running and accessible at the URL specified in the [`DATABASE_URL`] environment variable.

2. **Use the existing database connection:**

    The application will automatically use the database connection specified in the [`.env`]relative path ".../bookstore/.env") file. Ensure that the [`DATABASE_URL`] is correctly set to point to your existing database.

    Example [`.env`] ".../bookstore/.env") file:
    ```env

    DATABASE_URL=postgres://username:password@localhost:5432/book_inventory
    ```

## Project Structure

![dyCoh4R.png](https://iili.io/dyCoh4R.png)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
