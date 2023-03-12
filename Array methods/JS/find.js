// Array.prototype.find() :---

/*
--> The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

* Syntax:--- 

// Arrow function

--> find((element, index, array) => { ... })

// Callback function

--> find(callbackFn, thisArg)

// Inline callback function

find(function (element, index, array) {  }, thisArg);

* Parameter :-- 
 --> callbackFn --> it execute for each element in the array,it should return a truthy value to indicate a matching element has been found.func argument(element,index,array),thisArg

 * Return-value:--

 --> First- element in the array that satisfies the provided testing function.otherWise,undefined is retruned.

 * Description:---
   --> The find() method is an iterative method. It calls a provided callbackFn function once for each element in an array in ascending-index order, until callbackFn returns a truthy value. find() then returns that element and stops iterating through the array. If callbackFn never returns a truthy value, find() returns undefined.

   --> callbackFn is invoked for every index of the array, not just those with assigned values. Empty slots in sparse arrays behave the same as undefined.

   -->find() does not mutate the array on which it is called, but the function provided as callbackFn can. Note, however, that the length of the array is saved before the first invocation of callbackFn.
   */

// Examples:-- 
// Find an Object in an array by one of its properties;

const inventory = [
    { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

function isCherries(fruit){
    return fruit.name === "cherries";
}

console.log(inventory.find(isCherries));// { name: 'cherries', quantity: 5 }

// Using arrow functions and Destructuring:--

const inventory2 = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
  ];

const result = inventory.find(({name})=> name === 'cherries');

console.log(result);// { name: 'cherries', quantity: 5 }


// Find a prime number in an array :---

//finds an element in the array that is a prime number (or returns undefined if there is no prime number)

function isPrime(element,index,array){
    let start =2;
    while(start <= Math.sqrt(element)){
        if(element % start++ < 1){
            return false
        }
    }
    return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5

// Using find() on sparse arrays:-------

// Empty slots in sparse arrays are visited, and are treated the same as undefined.

// Declare array with no elements at indexes 2, 3, and 4
const array = [0, 1, , , , 5, 6];

// Shows all indexes, not just those with assigned values
array.find((value, index) => {
    console.log("Visited index ", index, " with value ", value);
  });

  // Shows all indexes, including deleted
array.find((value, index) => {
    // Delete element 5 on first iteration
    if (index === 0) {
      console.log("Deleting array[5] with value ", array[5]);
      delete array[5];
    }
    // Element 5 is still visited even though deleted
    console.log("Visited index ", index, " with value ", value);
  });

// Calling find() on non-array objects :---

// The find() method reads the length property of this and then accesses each integer index.

const arrayLike = {
    length: 3,
    0: 2,
    1: 7.3,
    2: 4,
  };

  console.log(Array.prototype.find.call(arrayLike,(x)=> !Number.isInteger(x)));// 7.3