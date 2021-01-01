const express = require("express");
const db = require ('./db')
const {addNewBook , getAllBooks , getBookById} = require ('./controller')

const app = express();

app.post('/book' , addNewBook)
app.get('/book' , getAllBooks)
app.get('/book:/book_id' , getBookById)

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});