'use strict';
// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"

let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.'
/* solution1 */
/* quote = quote.replace("It you", "It always takes longer than you");  */

/* solution2 */

let quote1 = quote.substr(0,20);
let quote3 = quote.substr(20,99);
let quote2 = " always takes longer than";

quote = quote1 + quote2 + quote3;

console.log(quote);