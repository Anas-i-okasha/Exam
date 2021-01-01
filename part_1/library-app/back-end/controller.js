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
    const {id} = req.params
mysql = `SELECT * FROM books WHERE (id ) values (?)`;
db.query(mysql , [id], (err , result)=>{
res.json('specific book')
})
}

const deleteBook=(req , res)=>{
 const {id}= req.params
 mysql = `DELETE * from books Where (id) VALUES (?)`;
 db.query(mysql , (err , result)=>{
     res.json('delete sucessfully')
 })
}

module.exports={
    addNewBook,
    getAllBooks,
    getBookById,
    deleteBook
}