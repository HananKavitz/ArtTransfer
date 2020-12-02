
const path = require('path');
const express = require('express');
const favicon = require('serve-favicon');
const apiRouts = require('./apiRouts');
const app = express();
const port = 5000;

const buildDir = path.resolve(__dirname + '../../../build');
// serve favicon
app.use(favicon(path.resolve(buildDir,'favicon.ico')));

// serve static files
console.log(buildDir)
app.use(express.static(buildDir));

app.use(apiRouts);

app.get('/', (req,res) => {
  res.send('hello');
});

app.listen(port, () => {
  console.log(`Style transfer server at http://localhost:${port}`)
})