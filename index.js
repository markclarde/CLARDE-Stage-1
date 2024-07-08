const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('JavaScript');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// To run this NodeJS application, use the command: node index.js
