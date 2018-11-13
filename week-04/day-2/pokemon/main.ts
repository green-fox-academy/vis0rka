import { Pokemon } from './Pokemon'
import { type } from 'os';

let pokemonOfAsh: Pokemon[] = initializePokemon();

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!

let wildPokemon: Pokemon = new Pokemon('Oddish', 'leaf', 'water');
//let goodPok = [];
// Which pokemon should Ash use?
/* for (let i= 0; i < pokemonOfAsh.length; i ++) {
  if(wildPokemon.type === pokemonOfAsh[i].effectiveAgainst) {
    goodPok.push(pokemonOfAsh[i].name)
  }
} */
let bestPokemon:string = "";
for (let k = 0; k < pokemonOfAsh.length; k ++) {
  if(pokemonOfAsh[k].isEffectiveAgainst(wildPokemon)) {
    bestPokemon = pokemonOfAsh[k].name.toString();    
  }
}



console.log("I choose you, " + bestPokemon);

function initializePokemon(): Pokemon[] {
    return [
        new Pokemon('Balbasaur', 'leaf', 'water'),
        new Pokemon('Pikatchu', 'electric', 'water'),
        new Pokemon('Charizard', 'fire', 'leaf'),
        new Pokemon('Balbasaur', 'water', 'fire'),
        new Pokemon('Kingler', 'water', 'fire')
    ];
}






