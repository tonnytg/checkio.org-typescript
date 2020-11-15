// https://js.checkio.org/mission/count-digits/solve/
// https://js.checkio.org/mission/count-digits/publications/tonnytg/js-node/first/

import assert from "assert";

function countDigits(text: string): number {
    let x: number = 0;
    for (let y = 0; y <= text.length; y++){
        if ( text[y] != " ") {
            console.log(text[y]);
            
            console.log(typeof(text[y]))
            // que engraçado para Number 0 não conta como numbero, o sistema transforma em false
            if ( text[y] == "0" ) {
                x = x + 1
            } else {
                if ( Number(text[y]) ) {
                    x = x + 1
                }
            }
        }
    };
    return x;
};


console.log('Example:');
console.log(countDigits('hi'));

// These "asserts" are used for self-checking
assert.equal(countDigits('hi'), 0);
assert.equal(countDigits('who is 1st here'), 1);
assert.equal(countDigits('my numbers is 2'), 1);
assert.equal(countDigits('This picture is an oil on canvas '
 + 'painting by Danish artist Anna '
 + 'Petersen between 1845 and 1910 year'), 8);
assert.equal(countDigits('5 plus 6 is'), 2);
assert.equal(countDigits(''), 0);
