// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)
var params = new Array();
function printParams(...string) {
    
    for (let i = 0; i < string.length; i++ ) {
        params = string;
        return params;
        
    }
}


printParams("kolbasz","teszta","bela","gatya");
console.log(params);