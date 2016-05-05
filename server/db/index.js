var mysql = require('mysql');
require('dotenv').load();

// var connection = mysql.createConnection({
//   user: "root",
//   password: "",
//   database: "stanford"
// })


if (!process.env.deployCheck){
  var connection = mysql.createConnection({
    user: "root",
    password: "",
    database: "stanford"
  })
} else {
  var connection = mysql.createConnection(process.env.JAWSDB_URL);
}

connection.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

module.exports = connection;