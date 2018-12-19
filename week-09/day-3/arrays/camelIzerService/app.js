const express = require('express');
const app = express();
const port = 3000;
const bp = require('body-parser')

app.use(bp());

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


app.post('/translate/', (req, res) => {
  const { text, lang } = req.body;
  if (text && lang) {
      const translated = {
        'translated': translate(text),
        'lang': 'teve'
      }
    res.json(translated)
  } else res.json({"error": "I can't translate that!"})
})

const isVowel = (character) => {
  return ['a', 'u', 'o', 'e', 'i'].some(vowel => vowel === character.toLowerCase());
}

const translate = (hungarian) => {
  let tempArray = hungarian.split("");

  for (let i = 0; i < tempArray.length; i++) {
    if (isVowel(tempArray[i])) {
      tempArray.splice(i, 1, `${tempArray[i]}v${tempArray[i]}`)
    }
  }
  return tempArray.join("");
}