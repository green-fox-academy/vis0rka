const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('rora endpoint with query status is 200', (t) => {
  request(app)
  .get('/rocket/fill?caliber=.50&amount=2500')
  .expect('Content-Type', /json/)
  .end((err,res) => {
    if(err) throw err;
    t.same(res.status, 200);
    t.same(res.body, {
      received: '.50',
      amount: '2500',
      shipstatus: '20%',
      ready: false
    });
    t.end()
  })
});

test('rora endpoint with query status is 200', (t) => {
  request(app)
  .get('/rocket/fill?caliber=.50&amount=10000')
  .expect('Content-Type', /json/)
  .end((err,res) => {
    if(err) throw err;
    t.same(res.status, 200);
    t.same(res.body, {
      received: '.50',
      amount: '10000',
      shipstatus: 'full',
      ready: true
    });
    t.end()
  })
});

test('rora endpoint with query status is 200', (t) => {
  request(app)
  .get('/rocket/fill?caliber=.50&amount=10000')
  .expect('Content-Type', /json/)
  .end((err,res) => {
    if(err) throw err;
    t.same(res.status, 200);
    t.same(res.body, {
      received: '.50',
      amount: '10000',
      shipstatus: 'overloaded',
      ready: false
    });
    t.end()
  })
});

test('rora endpoint withot query ', (t) => {
  request(app)
  .get('/rocket/fill')
  .expect('Content-Type', /json/)
  .end((err,res) => {
    if(err) throw err;
    t.same(res.status, 210);
    t.same(res.body, {error: 'wrong query'});
    t.end()
  })
});

