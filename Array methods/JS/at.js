// Array.prototype.at():---
/*
--> The at() method takes an integer value and returns the item at that index,allowing for (+1,-1)integer.
--> -1 integer count back from the last item in the array.

--> Syntax :-- arr.at(index)

--> Parameter:--
    * index: Zero-based index of the array element to be returned,converted to an integer.(-1 count back, index < 0,index + array.length);

--> Return Value: The element in the array matching the given index. not then  return undefined --> index < -array.length or index >= array.length;

--> at() method equivalent to the bracket notation when index is non-negative[-1].

example:-- array[0],array.at(0) both return the first item.but can't use arr[-1] in bracket notation,coz all value inside[] are treated as string properties so end-up reading arr["-1"] which is just normal string property instead of an array index.so use [arr.length-1].

--> but at()method allow to use (-1) in it.
--> at method is generic,it only expects the this value to have length property and integer-key property.
*/

// Example:---

// Return the last value of an array:---

const cart = ["snake","ghorilla","dog","cat","mouse"];

//  A function which returns the last item  of a given array

function lastItem(arr,index){
    return arr.at(index)
}

// get last item
const item1 = lastItem(cart,-5);
console.log(item1);
// add item in cart
cart.push("kangaroo");

const item2 = lastItem(cart,-1);
console.log(item2);


// comparing methods:---

const colors = ['red',"green","blue"];

// Using length property
const lengthWay = colors[colors.length-2];
console.log(lengthWay);;

// Using slice()method --> return arr

const SliceWay = colors.slice(-2,-1);
console.log(SliceWay[0]);

// Using at() method:--
const atWay = colors.at(-2);
console.log(atWay);


//  Calling at() on Non-array Objects:--
//  The at() method reads the length property of this and calculates the index to access.

const arrayLike = {
    length:4,
    "0" :"green",
    "1" :"blue",
    "2" :"black",
    "3" :"brwn"
}

console.log(Array.prototype.at.call(arrayLike,3));//brwn