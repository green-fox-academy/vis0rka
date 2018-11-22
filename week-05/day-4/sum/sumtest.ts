import { test } from 'tape';
import { Sum } from './sum'

test('sum test for equal', t => {  
  const numbers = new Sum();
  const numbersList = [10,5]

  let actual = numbers.sum(numbersList);
  let expected = 15;

  t.equal(actual,expected);
  t.end();
});

test('sum test', t => {  
  const numbers = new Sum();
  const numbersList = [];

  let actual = numbers.sum(numbersList);
  let expected = NaN;

  t.notOk(actual,expected);
  t.end();
});

test('sum test', t => {  
  const numbers = new Sum();
  const numbersList = [1]

  var actual = numbers.sum(numbersList);
  var expected = 1;

  t.equal(actual,expected);
  t.end();
});

test('sum test', t => {  
  const numbers = new Sum();
  const numbersList = [1,2,3,4,5]

  var actual = numbers.sum(numbersList);
  var expected = 15;

  t.equal(actual,expected);
  t.end();
});

test('sum test', t => {  
  const numbers = new Sum();
  const numbersList = [1,null]

  var actual = numbers.sum(numbersList);
  var expected = 1;

  t.equal(actual,expected);
  t.end();
});





