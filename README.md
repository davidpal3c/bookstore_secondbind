# Bookstore Application

This is a simple bookstore application built with React and TypeScript. It allows users to view, add, edit, and delete books. The application uses a RESTful API for backend operations and Tailwind CSS for styling.

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

    Create a [`.env`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fuser%2FProjects%2Fbookstore%2F.env%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%228d284eb3-b1bf-46e4-aaae-e0922aeca9e1%22%5D "/Users/user/Projects/bookstore/.env") file in the root directory of the project and add the following environment variables:

    ```env
    DATABASE_URL=your_database_url
    ```

    Replace `your_database_url` with the actual URL of your database.

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



