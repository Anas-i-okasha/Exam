const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'0000',
    database: 'books',

  });

  connection.connect((err)=>{
      if(err) throw err

      console.log('Connected db')
  })
   