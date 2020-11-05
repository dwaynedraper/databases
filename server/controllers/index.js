var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {

      let modelsGet = () => {
        let promise = new Promise((resolve, reject) => {
          resolve(models.messages.get());
        });

        return promise;
      };

      modelsGet()
        .then((data) => {
          //somehow add data to response callback
          //likely have to reformat to JSON or something the client expects
          console.log(data);
          // res.send(data);
        });


    }, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

