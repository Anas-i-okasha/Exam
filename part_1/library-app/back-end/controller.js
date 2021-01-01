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

const getBookById=(req , res)=>{
    const id = req.body
mysql = `SELECT * FROM books WHERE (id ) values (?)`;
db.query(mysql , [id], (err , result)=>{
res.json('specific book')
})
}

module.exports={
    addNewBook,
    getAllBooks,
    getBookById
}