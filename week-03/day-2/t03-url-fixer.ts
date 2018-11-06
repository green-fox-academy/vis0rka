'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

/* url = url.replace("s","s:").replace("bots","odds"); <- it is the simplier solution :) */

url = url.slice(5,99);
let url2 = "";
url2 = url2.concat("https:",url).replace("bots","odds");

console.log(url2);