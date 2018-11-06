'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText: string = ' - Buy milk\n';

/* todoText = todoText.replace(/^/,'My todo:\n').replace(/$/,' - Download games\n').replace(/$/,'\t - Diablo\n');
 */

todoText = "My todo:\n - Buy milk\n - Download games\n\t - Diablo"

console.log(todoText);