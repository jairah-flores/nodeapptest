var request = require('supertest');
var app = require('../index.js');
describe('GET /hello', function() {
    it('respond with hello world', function(done) {
        request(app).get('/hello').expect('{ "response": "Hello World" }', done);
    });
});