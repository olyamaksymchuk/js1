function findLongestWord(string="") {
  // Change code below this line

    const splitString = string.split(" ");
    let longestWord = splitString[0];

    for (let i = 0; i < splitString.length - 1; i += 1) {
        if (splitString[i].length > longestWord.length) {
            longestWord = splitString[i];
        }
    }
    return longestWord;

   
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
findLongestWord("Google do a roll");
findLongestWord("May the force be with you");
findLongestWord();