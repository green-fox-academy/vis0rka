// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

let matrix = [];
let arrayLength: number = 5;


for ( let i = 0; i <= arrayLength-1; i++ )
{

         matrix[i] = [0]; 


  
    for (let j = 0; j < arrayLength-1; j++ )
        {
            
            matrix[i].push(0);
            
        }     
 }

 let m = arrayLength-1;
 for (let k = 0 ; k < arrayLength ; k++) {
    matrix[k][m]=1;
    m--;

console.log(matrix);

