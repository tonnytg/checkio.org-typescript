//https://js.checkio.org/mission/three-words/solve/
import assert from "assert";

function threeWords(text:any ):boolean {
    let a: number = 0;
    text.split(" ").forEach(element => {
        Number(element) && a <= 2 ? a = 0 : a +=1;
    });
    return (a > 2)
};



console.log('Example:')
console.log(threeWords("Hello World hello"))

assert.equal(threeWords("Hello World hello"), true);
assert.equal(threeWords("He is 123 man"), false);
assert.equal(threeWords("1 2 3 4"), false);
assert.equal(threeWords("bla bla bla bla"), true);
assert.equal(threeWords("Hi"), false);

