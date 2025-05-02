# E-Business

A foundational e-commerce backend application developed using Node.js. This project serves as a learning platform to understand the basics of building an e-commerce system, including product management and database interactions.

## Features

- **Product Management**: Basic functionalities to manage products.
- **Database Integration**: Utilizes MongoDB for data storage.
- **Modular Structure**: Organized codebase for scalability and maintainability.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/andrew-NM/E-Business.git
   cd E-Business
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure the database**:

   Ensure MongoDB is running locally. Update the `db.js` file with your MongoDB connection string if necessary.

4. **Start the application**:

   ```bash
   node index.js
   ```

   The server will start on `http://localhost:3000/` by default.

## Usage

This project is a backend application. You can interact with it using tools like [Postman](https://www.postman.com/) or integrate it with a frontend application to build a complete e-commerce platform.

## Folder Structure

- `index.js`: Main entry point of the application.
- `db.js`: Database connection setup.
- `package.json`: Project metadata and dependencies.
- `node_modules/`: Contains all npm packages.
- `videos/`: Placeholder for video assets.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.
