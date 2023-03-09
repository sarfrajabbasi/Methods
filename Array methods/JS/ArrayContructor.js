// The Array() constructor is used to create Array objects.

// syntax:-- 
//  new Array(element1,element2,element3...elementN)
//  new Array(arrayLength);

// Without new also create new Array instance:--

// Array(e1,e2,e3);
// Array(arrayLength);


// Parameter:--
// --> Elements,but not single arguments(its take as length)
// --> Array-Length-> 0 - 2^32-1(with empty slot);


// RangeError:--
// not B/W --> 0 - 2 ^ 32 - 1;


// Example:----
// array literals:--
var fruits = ["Apple","Banana"];
console.log(fruits.length);//2
console.log(fruits[0]);//"Apple"


// Array constructor with a single parameter:----

// Arrays can be created using a constructor with a single number parameter. An array with its length property set to that number and the array elements are empty slots.
var fruits  = new Array(2);
console.log(fruits.length);//2
console.log(fruits[0]);//undefined


// Array constructor with multiple parameters:----
// "If more than one argument is passed to the constructor, a new Array with the given elements is created."
var fruits = new Array('Apple',"Banana");

console.log(fruits.length);//2
console.log(fruits[1]);//"Banana"