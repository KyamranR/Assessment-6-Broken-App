### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  -- Run in parallel, await later. Create an array of promises with map(). Loop over promises.
- What is a Promise?
  -- Promise is async function that promise to resolve or not
- What are the differences between an async function and a regular function?
  -- Async function waits until it get the info from somewhere regular just runs
- What is the difference between Node.js and Express.js?
  -- Node is JavaScript enviroment that runs server-side and Express is a framework build on top of Node
- What is the error-first callback pattern?
  -- First you handle the error if no error continue and run the app
- What is middleware?
  -- Middleware is a code that runs in the middle of the request or response cycle
- What does the `next` function do?
  -- next make it tothe next route
- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON("https://api.github.com/users/elie");
  const joel = await $.getJSON("https://api.github.com/users/joelburton");
  const matt = await $.getJSON("https://api.github.com/users/mmmaaatttttt");

  return [elie, matt, joel];
}
```

-- code makes separate calls to the api for each user its not efficient. Also hardcoded user names make not flexible. Naming variables doesnt give more info.
