function reverseWordsInSentence(sentence) {
    const words = sentence.split(' ');
    const reversedWords = words.map(word => reverseWord(word));
    const reversedSentence = reversedWords.join(' ');
    return reversedSentence;
}

function reverseWord(word) {
    const charArray = word.split('');
    charArray.reverse();
    return charArray.join('');
}

const inputSentence = prompt("Enter a sentence:");

if (inputSentence !== null && inputSentence !== "") {
    const reversedSentence = reverseWordsInSentence(inputSentence);
    console.log("Original Sentence: " + inputSentence);
    console.log("Reversed Sentence: " + reversedSentence);
} else {
    console.log("No input provided.");
}
