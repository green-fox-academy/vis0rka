'use strict';
export { }
// Create a function that prints the ingredient list of dictionaries to the console in the following format:
//
// +--------------------+---------------+----------+
// | Ingredient         | Needs cooling | In stock |
// +--------------------+---------------+----------+
// | vodka              | Yes           | 1        |
// | coffee_liqueur     | Yes           | -        |
// | fresh_cream        | Yes           | 1        |
// | captain_morgan_rum | Yes           | 2        |
// | mint_leaves        | No            | -        |
// +--------------------+---------------+----------+
//
// OPTIONAL
// The frist columns should be automatically as wide as the longest key

const ingredients: any[] = [
  { name: 'vodka', inStock: 1, needsCooling: true },
  { name: 'coffee_liqueur', inStock: 0, needsCooling: true },
  { name: 'fresh_cream', inStock: 1, needsCooling: true },
  { name: 'captain_morgan_rum', inStock: 2, needsCooling: true },
  { name: 'mint_leaves', inStock: 0, needsCooling: false },
  { name: 'sugar', inStock: 0, needsCooling: false },
  { name: 'lime juice', inStock: 0, needsCooling: true },
  { name: 'soda', inStock: 0, needsCooling: true }
];

let plus: string = "+";
let kjel: string = "-";
let pipe: string = "|";
let space: string = " ";
let max = [];
let largest = 0;

let ingredient: string = "Ingredient";

function maxKey(ingredients) {
  for (let i: number = 0; i < ingredients.length; i++) {
    max.push(ingredients[i].name.length);
  }

}
maxKey(ingredients);
max.sort(function(a, b){return b-a});
largest = max[0];

function rower() {
console.log(plus + kjel.repeat(largest) + plus + kjel.repeat(largest/2) + plus + kjel.repeat(largest/2) + plus);
}


for (let i = 0; i < 5; i ++) {
  if (i==0) {
    rower();
  } else if (i==1) {
    console.log(pipe + space + "Ingredient" + space.repeat(largest-ingredient.length-1) + pipe + space );
    
  }
}