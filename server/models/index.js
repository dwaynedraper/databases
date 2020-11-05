var db = require('../db').dbConnection;

module.exports = {
  messages: {
    get: function () {
      // db.connect();

      // //write query
      // let response = db.query('SELECT * FROM messages', (error, rows, fields) => {
      //   if (error) {
      //     throw error;
      //   }

      console.log('rows:', rows);
      return 'test data';
      // db.end();

    },
    //return query

    // a function which produces all the messages
    post: function () {

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

