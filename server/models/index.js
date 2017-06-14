var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      let queryString = 'select * from messages;';
      db.connectMySql(queryString, result => {
        console.log('send to client: ', result);
        callback(result);
      });
    }, // a function which produces all the messages
    post: function (body) {
      let queryString = `insert into messages (text, roomname) values 
      (${JSON.stringify(body.text)}, ${JSON.stringify(body.roomname)});`;
      db.connectMySql(queryString, null);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      let queryString = 'select * from users;';
      db.connectMySql(queryString, result => {
        callback(result);
      });
    },
    post: function (body) {

      let queryString = `insert into users (name) values ${JSON.stringify(body.username)}`;
      db.connectMySql(queryString, null);

    }
  }
};
