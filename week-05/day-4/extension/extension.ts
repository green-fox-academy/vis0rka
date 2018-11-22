'use strict';

export function add(a: number, b: number): number {
  return a + b;
}

export function maxOfThree(a: number, b: number, c: number): number {
  return Math.max(a,b,c);
};

export function median(pool: number[]): number {
  if (pool.length % 2 == 1) {
  return pool[Math.floor((pool.length - 1) / 2)];
  } else {
    return (pool[Math.floor((pool.length - 1) / 2)] + pool[Math.floor((pool.length) / 2)])/2
  }
}

export function isVowel(character: string): boolean {
  return ['a', 'u', 'o', 'e', 'i'].some(vowel => vowel === character.toLowerCase());
}

export function translate(hungarian: string): string {
  let tempArray = hungarian.split("");

  for (let i = 0; i < tempArray.length; i++) {
    if (isVowel(tempArray[i])) {
      tempArray.splice(i,1,`${tempArray[i]}v${tempArray[i]}`)
    }
  }
  return tempArray.join("");
}