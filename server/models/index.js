var db = require('../db');

const postHandler = (request, response, statusCode, header, callback) => {
  let result = '';

  request.on('data', data => {
    result += data;
  });

  request.on('end', () => {
    callback(result);
    response.writeHead(statusCode, header);
    response.end();
  });
};


module.exports = {
  messages: {
    get: function (res, statusCode, header) {
      let queryString = 'select * from messages';
      db.connetMySql(queryString, result => {
        res.writeHead(statusCode, header);
        res.end(result);
      });
    }, // a function which produces all the messages
    post: function (req, res, statusCode, header) {
      postHandler(req, res, statusCode, header, result => {
        let message = JSON.parse(result).message;
        let queryString = `insert into messages (message) values (${message})`;
        db.connetMySql(queryString, null);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (res, statusCode, header) {
      let queryString = 'select name from users';
      db.connetMySql(queryString, result => {
        res.writeHead(statusCode, header);
        res.end(result);
      });
    },
    post: function (req, res, statusCode, header) {
      postHandler(req, res, statusCode, header, result => {
        let user = JSON.parse(result).username;
        let queryString = `insert into users (name) values (${user})`;
        db.connetMySql(queryString, null);
      });
    }
  }
};
