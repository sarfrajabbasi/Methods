/* 
flat:--
The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

Syntax:-- flat(depth)
retrun : new arr
*/
function customFlat(arr, depth) {
  let result = [];
  function flatten(element, currentDepth) {
    if (Array.isArray(element) && currentDepth < depth) {
      for (let item of element) {
        flatten(item, currentDepth + 1);
      }
    } else {
      if (element !== undefined) {
        result.push(element);
      }
      
    }
  }

  flatten(arr, 0);
  return result;
}

let nestedArray = [1, [2, [3, 4]], 5, [6, [7, 8, [9, 10]]]];

// console.log(customFlat(nestedArray,Infinity));

const arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Using flat() on sparse arrays

const arr5 = [1, 2, , 4, 5];
console.log(customFlat(arr5)); // [1, 2, 4, 5]

const array = [1, , 3, ["a", , "c"]];
console.log(array.flat()); // [ 1, 3, "a", "c" ]
console.log(customFlat(array)); // [ 1, 3, "a", "c" ]

const array2 = [1, , 3, ["a", , ["d", , "e"]]];

console.log(array2.flat()); // [ 1, 3, "a", ["d", empty, "e"] ]
console.log(customFlat(array2)); // [ 1, 3, "a", ["d", empty, "e"] ]

console.log(array2.flat(2)); // [ 1, 3, "a", "d", "e"]

console.log(customFlat(array2, Infinity)); // [ 1, 3, "a", "d", "e"]



// Calling flat() on non-array objects

const arrayLike = {
    length: 3,
    0: [1, 2],
    // Array-like objects aren't flattened
    1: { length: 2, 0: 3, 1: 4 },
    2: 5,
    3: 3, // ignored by flat() since length is 3
  };
  console.log(Array.prototype.flat.call(arrayLike));
  // [ 1, 2, { '0': 3, '1': 4, length: 2 }, 5 ]