# Broken App Issues

## 1. Improper Handling of Asynchronous Code

- **Problem**: The original code uses `map` with an asynchronous function but does not wait for the promises to resolve.
- **Solution**: Use `Promise.all` to wait for all asynchronous operations to complete before proceeding.

## 2. Error Handling

- **Problem**: The `catch` block was missing the `err` parameter, preventing proper error handling.
- **Solution**: Added the `err` parameter to the `catch` block and also added a global error-handling middleware.

## 3. Missing JSON Middleware

- **Problem**: The server was unable to parse JSON payloads because `express.json()` middleware was not included.
- **Solution**: Added `express.json()` middleware to parse incoming JSON request bodies.

## 4. Output Formatting

- **Problem**: The response was manually stringified using `JSON.stringify`, which is not the best practice.
- **Solution**: Used `res.json()` to automatically format the output as JSON.

## 5. Lack of Comments and Documentation

- **Problem**: The original code lacked comments and explanations, making it difficult to understand.
- **Solution**: Added comments to the refactored code for better readability and maintainability.
