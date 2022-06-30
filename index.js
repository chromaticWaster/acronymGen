const prompt = require('prompt-sync')();
const axios = require('axios');

// Word variables
let firstWord = "";
let secondWord = "";
let thirdWord = "";
let fourthWord = "";


// Letter variables
let firstLetter = "";
let secondLetter = "";
let thirdLetter = "";
let fourthLetter = "";

console.log("Application will start");

console.log ("Getting words");

async function getRandomWord(character) {
    const result = await axios.get("https://api.datamuse.com/words?sp="+character+"*&max=70");

    const words = result.data;

    var word = words[Math.floor(Math.random()*words.length)];

    console.log(`Got word starting with ${character}: ${word.word}`)

    return word.word;
}

async function getRelatedWord(relatedWord, character) {
  //words related to duck that start with the letter b
  //	/words?ml=duck&sp=b*

  // words that often follow "drink" in a sentence, that start with the letter w
  // /words?lc=drink&sp=w*
  const result = await axios.get("https://api.datamuse.com/words?lc="+relatedWord+"&sp="+character+"*&max=70");

  const words = result.data;

  var word = words[Math.floor(Math.random()*words.length)];

  console.log(`Got word related to with ${relatedWord}: ${word.word}`)

  return word.word;

}

(async () => {
    // console.log(await getRandomWord(`o`));
    firstLetter = prompt('What is the first letter? ');
    secondLetter = prompt('What is the second letter? ');
    thirdLetter = prompt('What is the third letter? ');
    fourthLetter = prompt('What is the fourth letter? ');

    firstWord = await getRandomWord(firstLetter);
    secondWord = await getRelatedWord(firstWord, secondLetter);
    thirdWord = await getRelatedWord(secondWord , thirdLetter);
    fourthWord = await getRelatedWord(thirdWord, fourthLetter);

    console.log(`Your random acronym is : ${firstWord} ${secondWord} ${thirdWord} ${fourthWord}`);

  })()




