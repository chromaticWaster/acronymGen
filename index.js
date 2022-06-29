const axios = require('axios');


let letterO = "";
let letterC = "";
let letterW = "";
let letterP = "";

console.log("Application will start");

console.log ("Getting words");

async function getRandomWord(character) {
    const result = await axios.get("https://api.datamuse.com/words?sp="+character+"*&max=70");

    const words = result.data;

    var word = words[Math.floor(Math.random()*words.length)];

    console.log(`Got word starting with ${character}: ${word.word}`)

    return word.word;

    /** 
    .then(res => {

      
      for(word of words) {
        console.log(`Got word starting with ${character}: ${word.word}`);
      }
       
    })
    .catch(err => {
      console.log('Error: ', err.message);
    });
    */
}

(async () => {
    // console.log(await getRandomWord(`o`));
    letterO = await getRandomWord(`o`);
    letterC = await getRandomWord(`c`);
    letterW = await getRandomWord(`w`);
    letterP = await getRandomWord(`p`);

    console.log(`Your random OCWP acronym is : ${letterO} ${letterC} ${letterW} ${letterP}`);

  })()



