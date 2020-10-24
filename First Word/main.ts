import assert from "assert";

function firstWord(text: string): string { 
    // your code here
    let texto = text.split(/[. ,]+/);
    
    return texto[0] ? texto[0] : texto[1];
}


console.log('Example:')
console.log(firstWord("Hello world"))

// These "asserts" using for self-checking and not for auto-testing
assert.equal(firstWord("Hello world"), "Hello")
assert.equal(firstWord(" a word "), "a")
assert.equal(firstWord("don't touch it"), "don't")
assert.equal(firstWord("greetings, friends"), "greetings")
assert.equal(firstWord("... and so on ..."), "and")
assert.equal(firstWord("hi"), "hi")
console.log("Coding complete? Click 'Check' to earn cool rewards!");
