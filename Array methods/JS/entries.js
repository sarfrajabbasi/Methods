// Array.prototype.entries():---
/*
--> The entires() method returns a new Array iterator object that contains the key/value pairs for each index in the array.

--> Synatx:- entries()

--> Return value  :-- A new Array iterator object.
--> if array is empty then method iterates empty slots as value undefined.

*/

// Example:--

// Iterating with index and element:---

const a = ["a","b","c","d"];
 for(const[index,element] of a.entries()){
    console.log(index,element);
 }

 // 0 'a'
// 1 'b'
// 2 'c'
// 3 'd'

// Using a for...of loop:--

const array = ["a","b","c"];
const arrayEntries = array.entries();

for(const element of arrayEntries){
    console.log(element);
}

// [0, 'a']
// [1, 'b']
// [2, 'c']


// Iterating sparse arrays:---

// entires() will visit empty slots as if they are undefined.


for(const element of [,"a"].entries()){
    console.log(element);
}

// [0, undefined]
// [1, 'a']

// Calling entries() on non-array objects:----- 

// --> The entries() method reads the length property of this and then accesses each integer index.

const arrayLike = {
    length: 3,
    0: "a",
    1: "b",
    2: "c",
  };

  

  for(const entry of Array.prototype.entries.call(arrayLike)){
    console.log(entry);
  }

  // [ 0, 'a' ]
// [ 1, 'b' ]
// [ 2, 'c' ]