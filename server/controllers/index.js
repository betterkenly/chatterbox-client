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
      let pathname = url.parse(req.url).pathname;
      // console.log(pathname);
      if (pathname === '/classes/message') {
        models.messages.get(res, 200, header);
      } else {
        models.messages.get(res, 404, header);
      }
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req, res, 201, header);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      let pathname = url.parse(req.url).pathname;
      if (pathname === '/classes/users') {
        models.messages.get(res, 200, header);
      } else {
        models.messages.get(res, 404, header);
      }
    },
    post: function (req, res) {
      models.messages.post(req, res, 201, header);
    }
  }
};
