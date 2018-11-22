import { test } from 'tape';

class Apple {
  getApple() {
    return 'apple'
  }
}

test('string test', t => {  
  const newapple = new Apple();

  var actual = newapple.getApple();
  var expected = 'apple';

  t.equal(actual,expected);
  t.end();
});