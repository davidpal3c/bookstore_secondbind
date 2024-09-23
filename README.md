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

    Create a [`.env`] file in the root directory of the project and add the following environment variables:

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

## Project Structure

bookstore/
├── .env                            # Environment variables
├── .eslintrc.json                  # ESLint configuration
├── README.md                       # Project documentation
├── package.json                    # Project dependencies and scripts
├── package-lock.json               # Locked versions of dependencies
├── postcss.config.mjs              # PostCSS configuration
├── next.config.mjs                 # Next.js configuration
├── tsconfig.json                   # TypeScript configuration
├── prisma/                         # Prisma database configuration
│   ├── schema.prisma               # Prisma schema file
│   ├── migrations/                 # Database migrations
│   │   ├── migration.sql           # Migration SQL file
│   │   ├── migration_lock.toml     # Migration lock file
├── public/                         # Static assets
│   └── ...                         # Images, icons, etc.
├── src/                            # Source files
│   ├── pages/                      # Page components (routes)
│   │   ├── _app.tsx                # Custom App component
│   │   ├── index.tsx               # Home page
│   │   ├── add-book.tsx            # Page for adding a new book
│   │   ├── api/                    # API routes
│   │   │   ├── books/              # Book-related API routes
│   │   │   │   ├── create.ts       # API route for creating a book
│   │   │   │   ├── delete.ts       # API route for deleting a book
│   │   │   │   ├── edit.ts         # API route for editing a book
│   │   │   │   └── index.ts        # API route for fetching books
│   ├── components/                 # Reusable components
│   │   ├── BookList.tsx            # Component for listing books
│   │   ├── ModalAdd.tsx            # Modal for adding a new book
│   │   ├── ModalEdit.tsx           # Modal for editing an existing book
│   │   ├── Header.tsx              # Header component
│   │   ├── DownloadJSON.tsx        # Component for downloading data as JSON
│   │   ├── SvgIcon.d.ts            # Type definitions for SVG icons
│   ├── styles/                     # Global and component-specific styles
│   │   ├── globals.css             # Global CSS styles
│   ├── utils/                

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.