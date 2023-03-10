// Array.prototype.concat:----
/*
--> The concat() method is used to merge two or more arrays.
--> This method does not change the existing arrays, but instead returns a new array.

 * Synatx:---
   --> arr.concat(value0,value1)

 * Parameter:--

  valueN:- Arrays/values to concat into new array.
  * Return value:-- A new Array instance.

  --> The concat method does not recurse into nested array arguments.The concat() method is a copying method. It does not alter this or any of the arrays provided as arguments but instead returns a shallow copy that contains the same elements as the ones from the original arrays.

*/

// Examples:---

// Concatenating two arrays:---

const letters = ["a","b","c"];
const numbers = [1,2,3];

const alphaNumeric = letters.concat(numbers);

console.log(alphaNumeric);
// ['a', 'b', 'c', 1, 2, 3]

// Concatenating three arrays:----

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers1 = num1.concat(num2,num3);
console.log(numbers1);//[1, 2, 3, 4, 5, 6, 7, 8, 9]


// Concatenating values to an array:---

const letter = ["a", "b", "c"];

const alphaNumeric1 = letter.concat(1,[2,3]);

console.log(alphaNumeric1);// ['a', 'b', 'c', 1, 2, 3];

// Concatenating nested arrays :-----

const numb1 = [[1]];
const numb2 = [2, [3]];

const numberss = numb1.concat(numb2);

console.log(numberss);//[[1], 2, [3]]

// modfiy the first element:--
numb1[0].push(3);
console.log(numberss);//[[1, 4], 2, [3]]


// Concatenating array-like objects with Symbol.isConcatSpreadable:---

// ---> concat does not treat all array-like objects as arrays by default — only if Symbol.isConcatSpreadable is set to a truthy value (e.g. true).

const obj1 = { 0: 1, 1: 2, 2: 3, length: 3 };
const obj2 = { 0: 1, 1: 2, 2: 3, length: 3, [Symbol.isConcatSpreadable]: true };
console.log([0].concat(obj1,obj2));//// [ 0, { '0': 1, '1': 2, '2': 3, length: 3 }, 1, 2, 3 ]


// Using concat() on sparse arrays:---

//  ---> If any of the source arrays is sparse, the resulting array will also be sparse:

console.log([1,,3].concat([4,5]))//[1, empty, 3, 4, 5]

console.log([1,2].concat([3,,5]));// [1, 2, 3, empty, 5];


// Calling concat() on non-array objects:---
//  ---> If the this value is not an array, it is converted to an object and then treated in the same way as the arguments for concat(). In this case the return value is always a plain new array.

console.log(Array.prototype.concat.call({},1,2,3));//[{}, 1, 2, 3];

console.log(Array.prototype.concat.call(1,2,3));//[[Number: 1], 2, 3];

const arrayLike2 = {[Symbol.isConcatSpreadable] : true,length:2,0:1,1:2};

console.log(Array.prototype.concat.call(arrayLike2,3,4));//[1,2,3,4];
