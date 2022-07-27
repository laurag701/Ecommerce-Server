const express = require('express'); //installing express
const mysql = require('mysql'); //installing mysql
const cors = require('cors'); //installing cors
const port = 3001;

const app = express();
app.use(cors());
app.use(express.json());
var db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'Luna8368',
    database: 'Ecommerce'
})
app.get('/Products', (req, res) => {
    db.query('SELECT * FROM Products', (err, result) =>{
      if(err){
          console.log(err);
      }
      else{
          res.send(result);
        console.log(result);
      }
    })
})
module.exports
app.listen(process.env.PORT || port , () => {
    console.log('connected to port 3001');
})