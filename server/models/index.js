var db = require('../db').dbConnection;

module.exports = {
  messages: {
    get: function () {

      //write query
      let newProm = new Promise((resolve, reject) => {

        db.query('SELECT * FROM messages;', (error, rows, fields) => {
          if (error) {
            reject(error);
          } else {
            resolve(rows, fields);
          }
        });

      });

      return newProm;


    },
    //return query

    // a function which produces all the messages
    post: function (messagebody, roomname, username) {

      db.query(`INSERT INTO messages (messagebody, roomname, username) VALUES ('${messagebody}', '${roomname}', '${username}');`);

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

