const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../dist/lessz-kaja/browser')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/lessz-kaja/browser/index.html'));
});


app.get('/', (req, res) => {
  res.send('Hello World from Node.js server!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});