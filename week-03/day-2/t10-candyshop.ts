'use strict';

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

function sweets(shopItems) {
    for (let i: number = 0; i < shopItems.length; i++) {
        if (shopItems[i] === 2) {
            shopItems[i] = "Croissant";
        }
        else if (shopItems[i] === false) {
            shopItems[i] = "Ice cream";
        }            
    }
return shopItems; 
}
console.log(sweets(shopItems));



export = sweets;