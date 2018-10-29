'use strict';

let lineCount: number = 10;
let star: string = "*";
let space: string = " ";
let decrase: number = lineCount;
let finalSpace: number = 0;
let finalStar: string = "*";
let starRepeat: number = 1;


// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

for (let j: number = 0; j < lineCount; j++) {

    if (lineCount%2 == 0) {

            if (j < lineCount/2) {
                console.log(space.repeat(decrase) + star.repeat(starRepeat));
                starRepeat += 2;
                decrase--;
                
            }


        else if (j > lineCount/2){
                
                starRepeat -=2;
                decrase++;
                console.log(space.repeat(decrase) + star.repeat(starRepeat));       

            }
} 

    else {
        if (j < lineCount/2) {
            console.log(space.repeat(decrase) + star.repeat(starRepeat));
            starRepeat += 2;
            decrase--;
            
        }


        else if (j > lineCount/2){
            
            starRepeat -=2;
            decrase++;
            console.log(space.repeat(decrase) + star.repeat(starRepeat));       

        }
    }
}
