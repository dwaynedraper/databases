var db = require('../db').dbConnection;

module.exports = {
  messages: {
    get: function () {

      //write query
      let response = db.query('SELECT * FROM messages', (error, rows, fields) => {
        if (error) {
          throw error;
        } else {
          console.log('rows:', rows);
        }
      });
      console.log('rows:');
      //return 'test data';


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

