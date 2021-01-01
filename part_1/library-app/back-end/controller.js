const db = require('./db')

const addNewBook=(req , res)=>{

mysql = `INSERT INTO BOOKS (title , author , publishe , published_at) values (? , ? , ?  , ?)`;
db.query(mysql , (err , result)=>{
res.json ('Added sucess')
})
}
const getAllBooks=(req , res)=>{
    mysql = `SELECT * FROM books (title , author , publish , published_at)`;
    db.query(mysql , (err , result)=>{
        res.json('give me all books')
    })

}

module.exports={
    addNewBook,
    getAllBooks
}