import { resolveTxt } from "dns";

export {};

// Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a '*'.

function stringerX(text: string): string {
  if (text.length <= 1) {
    return text;
  }
  return text.charAt(0) + "*"  + stringerX(text.slice(1));
}

console.log(stringerX("belaax"));
