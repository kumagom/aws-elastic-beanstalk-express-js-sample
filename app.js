const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World! TEAM3 변경사항 반영'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
