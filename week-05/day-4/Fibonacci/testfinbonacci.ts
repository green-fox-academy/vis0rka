import { test } from 'tape';
import { fibonacci } from './Fibonacci'

test('result test', t => {  
  const index = 5;
  const equal = 5;

  t.equal(fibonacci(index),equal)
  t.end();
});

test('test for negativ number', t => {  
  const index = -5;

  t.equal(fibonacci(index),'wrong number')
  t.end();
});


test('test for fraction', t => {  
  const index = 1.5;

  t.equal(fibonacci(index),'wrong number')
  t.end();
});