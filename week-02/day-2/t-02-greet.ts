// -  Create variable named `name` and assign the value `Greenfox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Greenfox`
//     -  Prepare for the special case when no parameters are given
// -  Greet `name`

let named: string = ""

function greet(named) {
    if (named == "" ) {
        return named = "please add a string to named parameter";
    }

    return "Greetings, deer " + named;
    
}
console.log(greet(named));
