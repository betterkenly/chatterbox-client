var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

exports.connectMySql = (sql, callback) => {
  let connection = mysql.createConnection({
    host: 'localhost',
    user: 'student',
    password: 'student',
    database: 'chat'
  });

  connection.connect();

  connection.query(sql, (err, result) => {
    console.log('queryString: ', sql);
    if (err) { console.log('****** FAILED ******', err); }
    console.log('mySQL result: ', result);
    if (callback) { callback({results: result}); }
  });

  connection.end();
};
