var assert = require('chai').assert;
var request = require('request');

var PORT = process.env.INTEGRATION_PORT;

suite('integration example', function () {
  test('test one', function (done) {

    var url = 'http://127.0.0.1:' + PORT + '/_api/_plugins';
    request(url, function(error, response, body) {
      var json_body = JSON.parse(body);
      assert.equal('template', json_body[1].name, 'plugin list should include our plugin');
      done();
    });

  });

  test('test two', function (done) {
      assert.ok(true, 'everything is still OK!');
      done();
  });

});
