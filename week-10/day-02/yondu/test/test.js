const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('groot endpoint with query status is 200', (t) => {
  request(app)
  .get('/yondu?distance=100.0&time=10.0')
  .expect('Content-Type', /json/)
  .end((err,res) => {
    if(err) throw err;
    t.same(res.status, 200);
    t.same(res.body, {
      distance: '100.0',
      time: '10.0',
      speed: 10
    });
    t.end()
  })
});

test('groot endpoint without query', (t) => {
  request(app)
  .get('/yondu')
  .expect('Content-Type', /json/)
  .end((err,res) => {
    if(err) throw err;
    t.same(res.body, {error: 'wrong query'});
    t.end()
  })
});

test('groot endpoint without query status check 210', (t) => {
  request(app)
  .get('/yondu')
  .expect('Content-Type', /json/)
  .end((err,res) => {
    if(err) throw err;
    t.same(res.status, 210);
    t.end()
  })
});

test('groot endpoint with query status is 200', (t) => {
  request(app)
  .get('/yondu?distance=tamas&time=kicsi')
  .expect('Content-Type', /json/)
  .end((err,res) => {
    if(err) throw err;
    t.same(res.body, {error: 'wrong query'});
    t.end()
  })
});