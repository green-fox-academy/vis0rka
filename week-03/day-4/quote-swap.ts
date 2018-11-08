'use strict';
// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code

// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().

let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];


function quoteSwap(words) {
    words.splice(2,0,words[5],words[3],words[4],words[2],words[6],words[7]);
    words.splice(8,6);
    return words.join(" ");
}


console.log(quoteSwap(words));
// Expected output: "What I cannot create I do not understand."
export = quoteSwap;