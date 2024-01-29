/* 
flat:--
The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
*/
function customFlat(arr, depth) {
  let result = [];
  function flatten(element, currentDepth) {
    if (Array.isArray(element) && currentDepth < depth) {
      for (let item of element) {
        flatten(item, currentDepth + 1);
      }
    } else {
      result.push(element);
    }
  }

  flatten(arr, 0);
  return result;
}

let nestedArray = [1, [2, [3, 4]], 5, [6, [7, 8, [9, 10]]]];

// console.log(customFlat(nestedArray,Infinity));