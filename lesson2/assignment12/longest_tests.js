
function toSentences(text) {
  let sentences = text
    .replace(/(\.|!|\?)\s/g, `$1$1 `)
    .split(/(\.|!|\?)\s/)
    .filter(sentence => sentence.match(/^\w/));

  return sentences;
}

function logMessage(sortedText) {
  let longestSentence = sortedText[sortedText.length - 1];

  console.log(longestSentence.join(' '));
  console.log(`\nThe longest sentence has ${longestSentence.length} words.`);
}

function longestSentence(text) {
  let sentences = [];
  sentences = sentences.concat(toSentences(text));
  let words = sentences.map(sentence => sentence.split(' '));
  let sortedSentences = words.sort((s1, s2) => s1.length - s2.length);

  return logMessage(sortedSentences);
}
let longText = "     I!";
longestSentence(longText);

