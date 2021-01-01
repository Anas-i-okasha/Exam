const express = require("express");
const db = require ('./db')
const {addNewBook} = require ('./controller')

const app = express();

app.post('/book' , addNewBook)

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});