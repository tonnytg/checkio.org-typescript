import assert from "assert";

function easyUnpack(arr) {
        let arr2 = []
        arr2.push(arr[0],arr[2],arr[arr.length-2]);
        return(arr2);
}

console.log('Example:');
console.log(easyUnpack([1, 2, 3, 4, 5, 6, 7, 9]));

// These "asserts" are used for self-checking
assert.deepEqual(easyUnpack([1, 2, 3, 4, 5, 6, 7, 9]), [1, 3, 7]);
assert.deepEqual(easyUnpack([1, 1, 1, 1]), [1, 1, 1]);
assert.deepEqual(easyUnpack([6, 3, 7]), [6, 7, 3]);


