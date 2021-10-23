const template1 = 'The ${adjective} brown ${noun} ${adverb} ' +
                '${verb} the ${adjective} yellow ' +
                '${noun}, who ${adverb} ${verb} his ' +
                '${noun} and looks around.';

const template2 = "The ${noun} ${verb} the ${noun}'s ${noun}.";

function madlibs(template) {
  const REPLACEMENT_TEXTS = {
    adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
    noun: ['fox', 'dog', 'head', 'leg', 'tail'],
    verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
    adverb: ['easily', 'lazily', 'noisily', 'excitedly'],
  };

  function replaceText(match) {
    const key = match.replace(/[^a-z]/g, '');
    const index = Math.floor(Math.random() * REPLACEMENT_TEXTS[key].length);
    return REPLACEMENT_TEXTS[key][index];
  }

  return template.replace(/\${[a-z]+}/g, replaceText);
}


// Discussion

// For this problem, there are two things to consider: (1) the format for the
// template and (2) how to process the template.

// For the format, the idea is to come up with an easy way for the function to
// find "words" or "tokens" in the template, and replace them with the
// corresponding type of content. The tokens need to have identifiers denoting
// their start and end, so that the function is able to tell them apart from the
// rest of the text. These identifiers also must be unique enough to prevent the
// function from mistaking normal text as a token to replace.

// For instance, if the template uses double quotes ("") to denote tokens to
// replace, then the following code leads to a bug:

// const template1 = 'The "noun" shouted "hello".';

// The function will interpret both "noun" and "hello" as words to replace.

// Given the potential issue shown above, the solution's approach is to use the
// token, ${noun}, to denote the text to replace. The word between the curly
// braces {} is the type of content the token should be replaced with—in this
// case, a noun. The $ before the curly braces is to make the identifier more
// unique, since there's a chance that the text may contain curly braces used on
// their own in a typical way—instead of being used for denoting a token.

// The solution processes the template by calling the String.prototype.replace
// method and passing in a regex and a callback function as arguments. The regex
// pattern, /\${[a-z]+}/g, matches each token in the template. The text matched
// by the regex pattern is then passed as an argument to the replaceText
// callback function. The replaceText function processes the matched text to
// remove any characters used as identifiers (in this case, ${}), leaving only
// the content type. The content type is then used as the key to retrieve the
// appropriate list of words from the REPLACEMENT_TEXTS object. The replaceText
// function generates a random index and uses it to select a word from the list
// at random.