// -  Create a function called `factorio`
//    that returns it's input's factorial



function factorio(num) {
 
    for (let i:number = num -1 ; i >= 1; i--)
    num=num*i;
    return num;

}
console.log(factorio(6));
