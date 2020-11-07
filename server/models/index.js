var db = require('../db').dbConnection;
var Sequelize = require('sequelize');
var sdb = new Sequelize('chat', 'root', '1117');

var message = sdb.define('message', {
  messagebody: Sequelize.STRING,
  roomname: Sequelize.STRING,
  username: Sequelize.STRING,
  dateCreated: Sequelize.DATE,

}, {
  timestamps: false
});

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

      //db.query(`INSERT INTO messages (messagebody, roomname, username) VALUES ('${messagebody}', '${roomname}', '${username}');`);
      message.sync()
        .then(function() {
          message.create({messagebody, roomname, username})
        });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

