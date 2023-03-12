// Array.prototype.fill():--

/*
--> The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.

--> Synatx:-- 
fill(value)
fill(value, start)
fill(value, start, end)

--> Parameters:--
* value
* start(optional)(-1,start < -array.length =>0,start >= array.length=> no index)
* end(optional)(optional)(-1,start < -array.length =>0,start >= array.length=> no index)


--> return value:--
The modified array,filled with value.

--> The fill() method is a mutating method. It does not alter the length of this(array), but it will change the content of this(array).
--> The fill() method fills empty slots in sparse arrays with value as well.

--> Note: Using Array.prototype.fill() on an empty array (length = 0) would not modify it as the array has nothing to be modified. To use Array.prototype.fill() when declaring an array, make sure the array has non-zero length
*/

// Example:---

// Using fill:--
 console.log([1,2,3].fill(4));//[4,4,4]
 console.log([1,2,3].fill(4,1));//[1,4,4]
 console.log([1,2,3].fill(4,1,2));//[1,4,3]
 console.log([1,2,3].fill(4,1,1));//[1,2,3]
 console.log([1,2,3].fill(4,3,3));//[1,2,3]
 console.log([1,2,3].fill(4,-3,-2));//[4,2,3]
 console.log([1,2,3].fill(4,NaN,NaN));//[1,2,3]
 console.log([1,2,3].fill(4,3,5));//[1,2,3]
 console.log([1,2,3].fill(4));//[4,4,4]

// A single object, referenced by each slot of the array:

const arr = Array(3).fill({})//[{},{},{}]
arr[0].hi = "hi" // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]

// Using fill() to create a matrix of all 1:---
//how to create a matrix of all 1, like the ones() function of Octave or MATLAB.

const  arr1 = new Array(3);
for(let i=0;i<arr1.length;i++){
    arr1[i] = new Array(4).fill(1);//creating an array of size 4 and filled of 1.
    console.log(arr1);

}
1
arr1[0][0] =10;
console.log(arr1[0][0]);//10
console.log(arr1[1][0]);//1
console.log(arr1[2][0]);//1

// Using fill() to populate an empty array:--

//  how to populate an array, setting all elements to a specific value. The end parameter does not have to be specified.
const tempGirls = Array(5).fill("girl",0);

// Note:-- that the array was initially a sparse array with no assigned indices. fill() is still able to fill this array.


// Calling fill() on non-array objects:---


// The fill() method reads the length property of this and sets the value of each integer property from start to end.


const arrayLike = {length:2};
console.log(Array.prototype.fill.call(arrayLike,1));
// { '0': 1, '1': 1, length: 2 }

