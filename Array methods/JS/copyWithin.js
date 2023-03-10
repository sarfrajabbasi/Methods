// Array.prototype.copyWithin():----

/*
--> The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.

 * Syntax:-- copyWithin(target, start, end)

* Parameters:--
  --> target:-- index(- target < 0, target + array.length,target < -array.length, target >= array.length);

  --> start:-- index(- target < 0, target + array.length,target < -array.length, target >= array.length);


--> end:-- index(- target < 0, target + array.length,target < -array.length, target >= array.length);

--> Return value :--- The modified array.


--> The copyWithin() method is a mutating method. It does not alter the length of this, but it will change the content of this and create new properties or delete existing properties, if necessary.

--> The copyWithin() method preserves empty slots. If the region to be copied from is sparse, the empty slots' corresponding new indices are deleted and also become empty slots.


--> The copyWithin() method is generic. It only expects the this value to have a length property and integer-keyed properties. Although strings are also array-like, this method is not suitable to be applied on them, as strings are immutable.

*/


// Example:---

// Using copyWithin():--

console.log([1,2,3,4,5].copyWithin(-2));
//[1, 2, 3, 1, 2]
console.log([1,2,3,4,5].copyWithin(0,3));
// [4, 5, 3, 4, 5]
console.log([1,2,3,4,5].copyWithin(0,3));
// [4, 2, 3, 4, 5]
console.log([1,2,3,4,5].copyWithin9-2,-3,-1);
// [1, 2, 3, 3, 4]


// Using copyWithin() on sparse arrays :--will propagate empty slots.

console.log([1,,3].copyWithin(2,1,2))//// [1, empty, empty]

// Calling copyWithin() on non-array objects:----
// -->The copyWithin() method reads the length property of this and then manipulates the integer indices involved.

const arrayLike = {
    length: 5,
    3: 1,
  };

  console.log(Array.prototype.copyWithin.call(arrayLike,0,3));
// { '0': 1, '3': 1, length: 5 }
console.log(Array.prototype.copyWithin.call(arrayLike,3,1));// { '0': 1, length: 5 }

// The '3' property is deleted because the copied source is an empty slot
