var models = require('../models');
var url = require('url');

let header = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'X-Parse-Application-Id, X-Parse-REST-API-Key, Content-Type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(result => {
        res.json(result); 
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('messages body: ', req.body);
      console.log('typeof body: ', typeof req.body);
      models.messages.post(req.body);
      res.send();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get( result => {
        res.json(result);
      });
    },
    post: function (req, res) {
      models.messages.post(req, res, 201, header);
    }
  }
};
