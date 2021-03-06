/* You'll need to have MySQL running and your Node server running
 * for these tests to pass. */

var mysql = require('mysql');
var request = require('request'); // You might need to npm install the request module!
var expect = require('chai').expect;

describe('Persistent Node Chat Server', function() {
  var dbConnection;

  beforeEach(function(done) {
    dbConnection = mysql.createConnection({
      user: 'root',
      password: '1117',
      database: 'chat'
    });
    dbConnection.connect();

    var tablename = 'messages'; // TODO: fill this out

    /* Empty the db table before each test so that multiple tests
     * (or repeated runs of the tests) won't screw each other up: */
    dbConnection.query('truncate ' + tablename, done);
  });

  afterEach(function() {
    dbConnection.end();
  });

  it('Should insert posted messages to the DB', function(done) {
    // Post the user to the chat server.
    request({
      method: 'POST',
      uri: 'http://127.0.0.1:3000/messages',
      json: { username: 'Valjean' }
    }, function () {
      // Post a message to the node chat server:
      request({
        method: 'POST',
        uri: 'http://127.0.0.1:3000/messages',
        json: {
          username: 'Valjean',
          text: 'In mercys name, three days is all I need.',
          roomname: 'Hello'
        }
      }, function () {
        // Now if we look in the database, we should find the
        // posted message there.

        // TODO: You might have to change this test to get all the data from
        // your message table, since this is schema-dependent.
        var queryString = 'SELECT * FROM messages';
        var queryArgs = [];

        dbConnection.query(queryString, queryArgs, function(err, results) {
          // Should have one result:
          expect(results.length).to.equal(2);

          // TODO: If you don't have a column named text, change this test.
          expect(results[1].messagebody).to.equal('In mercys name, three days is all I need.');

          done();
        });
      });
    });
  });

  it('Should output all messages from the DB', function(done) {
    // Let's insert a message into the db
    var queryString = 'INSERT INTO messages (messagebody, roomname, username) VALUES (\'Men like you can never change!\', \'main\', \'testSuite\');';
    // TODO - The exact query string and query args to use
    // here depend on the schema you design, so I'll leave
    // them up to you. */

    dbConnection.query(queryString, function(err) {
      if (err) { throw err; }

      // Now query the Node chat server and see if it returns
      // the message we just inserted:
      request('http://127.0.0.1:3000/classes/messages', function(error, response, body) {
        var messageLog = JSON.parse(body);
        console.log('MESSAGE LOG:', messageLog);
        expect(messageLog.results[0].text).to.equal('Men like you can never change!');
        expect(messageLog.results[0].roomname).to.equal('main');
        done();
      });
    });
  });

  it('should still work if sent incomplete data', function(done) {
    request({
      method: 'POST',
      uri: 'http://127.0.0.1:3000/messages',
      json: { username: 123 }
    }, function(error, response, body) {
      expect(body).to.exist;
      done();
    });
  });

  it('should serve index.html file on GET requests to root path /', function(done) {
    request({
      method: 'GET',
      uri: 'http://127.0.0.1:3000/',
    }, function(error, response, body) {
      expect(body).to.contain('<!doctype html>');
      done();
    });
  });

  it('should return 404 on request to incorrect path', function(done) {
    request({
      method: 'GET',
      uri: 'http://127.0.0.1:3000/unknown',
    }, function(error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });


});
