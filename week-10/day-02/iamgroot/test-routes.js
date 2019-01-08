const test = require('tape');
const request = require('supertest');
const app = require('./routes');


test('groot endpoint', (t) => {
  request(app)
  .get('/groot')
  .expect('Content-Type', /json/)
  .end((err,res) => {
    if(err) throw err;
    t.same(res.body, {error: 'I am Groot!'});
    t.end()
  })
});