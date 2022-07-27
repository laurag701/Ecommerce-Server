const express = require('express'); //installing express
const mysql = require('mysql'); //installing mysql
const cors = require('cors'); //installing cors
const port = 3001;

const app = express();
app.use(cors());
app.use(express.json());
var db = mysql.createConnection({
    user: 'admin',
    host: 'ecomm-react.czoa6b96suwp.us-east-2.rds.amazonaws.com',
    password: 'Luna8368',
    database: 'Ecommerce'
})
app.listen(process.env.PORT || port , () => {
    console.log('connected to port 3001');
})
app.get('/products', (req, res) => {
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
