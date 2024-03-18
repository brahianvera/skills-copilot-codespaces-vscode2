//create web server
const express = require('express');
const app = express();
const port = 3000;

//create a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Path: comments.js
// Compare this snippet from comment.js:
// //create web server
// const express = require('express');
// const app = express();
// const port = 3000;
// 
// //create a route
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });
// 
// //start the server
// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
// // Path: comment.js
// //create web server
// const express = require('express');
// const app = express();
// const port = 3000;
// 
// //create a route
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });
// 
// //start the server
// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
//create web server
const express = require('express');
const app = express();
const port = 3000;

//create a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```

### Exercise 5: Create a New Route

Create a new route that responds with a different message.

```javascript
// Path: comments.js
// Create a new route
app.get('/about', (req, res) => {
  res.send('This is a different route');
});
```

### Exercise 6: Create a JSON Response

Create a new route that responds with a JSON object.

```javascript
// Path: comments.js
// Create a new route
app.get('/json', (req, res) => {
  res.json({ message: 'Hello World!' });
});
```

### Exercise 7: Create a Route with URL Parameters

Create a new route that responds with the value of the URL parameter.

```javascript
//