var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {


      // models.messages.get((err, data) => {
      //   if (err) {
      //     callback(err);
      //   } else {
      //     res.writeHead(200, headers);
      //     res.end(data);
      //   }
      // });
      models.messages.get();



      // let modelsGet = () => {
      //   let promise = new Promise((resolve, reject) => {
      //     resolve(models.messages.get());
      //   });

      //   return promise;
      // };

      // modelsGet()
      //   .then((data) => {
      //     //somehow add data to response callback
      //     //likely have to reformat to JSON or something the client expects
      //     console.log(data);
      //     // res.send(data);
      //   });


    }, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

