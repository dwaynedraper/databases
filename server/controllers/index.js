var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {

      models.messages.get()
        .then(data => {
          let responseObj = {
            results: []
          };
          let stubId = 0;
          for (let i = 0; i < data.length; i ++) {
            let row = data[i];
            let obj = {};
            obj['username'] = row.username;
            obj.text = row.messagebody;
            obj.roomname = row.roomname;
            stubId += 1;
            obj.objectId = stubId;
            responseObj.results.push(obj);
          }
          return responseObj;
        }).then(string => {
          res.send(string);
        })
        .catch(err => console.log(err));


    }, // a function which handles a get request for all messages
    post: function (req, res) {

      let messagebody = req.body.text;
      let username = req.body.username;
      let roomname = req.body.roomname;

      models.messages.post(messagebody, roomname, username);

      res.send(req.body);


    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

