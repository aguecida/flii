const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist/flii'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/flii/index.html'));
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
