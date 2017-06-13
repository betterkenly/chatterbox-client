var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

exports.connetMySql = (sql, callback) => {
  let connection = mysql.createConnection({
    host: 'http://127.0.0.1:3000',
    user: 'root',
    password: '',
    database: 'chat'
  });

  connection.connect();

  connection.query(sql, (err, result) => {
    console.log(sql);
    console.log(result);
    if (err) { console.log(err); }
    callback(null, result);
  });

  connection.end();
};
