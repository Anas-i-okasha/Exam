const db = require('./db')

const addNewBook=(req , res)=>{

mysql = `INSERT INTO BOOKS (title , author , publishe , published_at) values (? , ? , ?  , ?)`;
db.query(mysql , (err , result)=>{
res.json ('Added sucess')
})
}


module.exports={
    addNewBook
}