import { test } from 'tape';
import { countLetters } from './countLetters'



test('test the function', t => {  
  const text = 'blea';
  const equal = {b:1,l:1,e:1,a:1}
  t.deepEqual(countLetters(text),equal)
  t.end();
});

test('test the function', t => {  
  const text = 'blea';
  
  t.ok(countLetters(text))
  t.end();
});

test('test the function', t => {  
  const text = 'blea';
  const equal = 'kovacs';
  
  t.notDeepEqual(countLetters(text),equal)
  t.end();
});