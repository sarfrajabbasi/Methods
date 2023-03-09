// Array: length:------

// the length data property of an array instance represents the number of elements in that array.

const listA = [1,2,3];
const listB = new Array(6);

console.log(listA.length);//3
console.log(listB.length);//6

// listB.length = 2**32;
// console.log(length);//RangeError: Invalid array length

// const listC = new Array(-100)//negative numbers are not allowed;

// console.log(listC);//RangeError: Invalid array length

var a = [];
 a["0"] = 0
 a["1"] = 1
 a["2"] = 2
 a["02"] ="a"
 console.log(...a);

//  When length is set to a bigger value than the current length, the array is extended by adding empty slots, not actual undefined values. Empty slots have some special interactions with array methods

const arr = [1,2];
console.log(arr);//[1,2]

arr.length =5;//set array length to 5 while currently 2.

console.log(arr);//[1,2,<3 empty items>]

arr.forEach((e)=>{console.log(e)})
//1
//2


// Example:----
// iterating over an array

const numbers = [1,2,3,4,5];
const length = numbers.length;
for(let i=0;i<length;i++){
    numbers[i] *= 2
}

// numbers is now [2,4,6,8,10]


// Shortening an array:---

if(numbers.length>3){
    numbers.length =3
}

console.log(numbers);//[1,2,3]
console.log(numbers.length);//3
console.log(numbers[3]);//undefined.the extra elements are deleted

// Create empty array of fixed length:---

const num = [];

num.length = 3;

console.log(num);//[empty x 3]

// Array with non-writable length:-----

// The length property is automatically updated by the array when elements are added beyond the current length. If the length property is made non-writable, the array will not be able to update it. This causes an error in strict mode.

'use strict';

const number = [1,2,3,4,5,];
Object.defineProperty(number,"length",{writable:false});
number[5] = 6;// TypeError: Cannot assign to read only property 'length' of object '[object Array]'

number.push(5); // TypeError: Cannot assign to read only property 'length' of object '[object Array]'
