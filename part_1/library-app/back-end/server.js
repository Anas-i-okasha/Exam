const express = require("express");
const db = require ('./db')
const {addNewBook , getAllBooks} = require ('./controller')

const app = express();

app.post('/book' , addNewBook)
app.get('/book' , getAllBooks)

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});