const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('groot endpoint without query status is 210', (t) => {
  request(app)
  .get('/groot')
  .expect('Content-Type', /json/)
  .end((err,res) => {
    if(err) throw err;
    console.log(res);
    t.same(res.status, 210);
    t.end()
  })
});

test('groot endpoint without query check the error', (t) => {
  request(app)
  .get('/groot')
  .expect('Content-Type', /json/)
  .end((err,res) => {
    if(err) throw err;
    t.same(res.body, {error: 'I am Groot!'});
    t.end()
  })
});

test('groot endpoint with query', (t) => {
  request(app)
  .get('/groot?message=valami')
  .expect('Content-Type', /json/)
  .end((err,res) => {
    if(err) throw err;
    t.same(res.body, {
      received: 'valami',
      translated: 'I am Groot!'
    });
    t.same(res.status, 200);
    t.end();
  })
});