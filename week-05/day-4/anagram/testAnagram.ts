import { test } from 'tape';
import { anagram } from './anagram'


test('true test', t => {  
  const text1 = 'dog';
  const text2 = 'god';

  t.ok(anagram(text1,text2))
  t.end();
});

test('false test', t => {  
  const text1 = 'dog';
  const text2 = 'god22';

  t.notOk(anagram(text1,text2))
  t.end();
});