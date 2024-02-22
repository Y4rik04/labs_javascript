function replaceWord(text, targetWord, replacement) {
    const modifiedText = text.replace(new RegExp(targetWord, 'g'), replacement);
    return modifiedText;
}

let originalText = "I am the one who knocks.";
let newText = replaceWord(originalText, "knocks", "speak");

console.log(newText);