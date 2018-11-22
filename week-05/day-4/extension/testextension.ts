'use strict';

import { test } from 'tape';
import { add, maxOfThree, median, isVowel, translate } from './extension';

test('add: 2 and -4 is -2', function (t: any): any {
  t.equal(add(2, -4), -2);
  t.end();
});

test('add: 1 and 4 is 5', function (t: any): any {
  t.equal(add(1, 4), 5);
  t.end();
});

test('max of three: first', function (t: any): any {
  t.equal(maxOfThree(5, 4, 3), 5);
  t.end();
});

test('max of three: second', function (t: any): any {
  t.equal(maxOfThree(3, 2, 5), 5);
  t.end();
});

test('max of three: third', function (t: any): any {
  t.equal(maxOfThree(3, 4, 5), 5);
  t.end();
});

test('median: four', function (t: any): any {
  t.equal(median([7, 5, 3, 5]), 4);
  t.end();
});

test('median: five', function (t: any): any {
  t.equal(median([1, 2, 3, 4, 5]), 3);
  t.end();
});

test('is vowel: a', function (t: any): any {
  t.ok(isVowel('a'));
  t.end();
});

test('is vowel: u', function (t: any): any {
  t.ok(isVowel('U'));
  t.end();
});

test("is vowel: k", function(t: any): any {
  t.notOk(isVowel("k"));
  t.end();
});

test('translate: teve', function (t: any): any {
  t.equal(translate('teve'), 'teveveve');
  t.end();
});

test('translate: lagopus', function (t: any): any {
  t.equal(translate('lagopus'), 'lavagovopuvus');
  t.end();
});