// Array.prototype.every()
/*
--> The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

--> Syntax:--
// Arrow function
every((element) => {  })
every((element, index) => {  })
every((element, index, array) => { })

// Callback function
every(callbackFn)
every(callbackFn, thisArg)

// Inline callback function
every(function (element) {  })
every(function (element, index) {  })
every(function (element, index, array) { / … / })
every(function (element, index, array) { /… / }, thisArg)

-->Parameters:-- callbackFunction
* element
* index
* array

--> Return valaue:-- true if callbackFn returns a truthy value for every array element. Otherwise, false.

--> The every() method is an iterative method. It calls a provided callbackFn function once for each element in an array, until the callbackFn returns a falsy value. If such an element is found, every() immediately returns false and stops iterating through the array. Otherwise, if callbackFn returns a truthy value for all elements, every() returns true.

--> callbackFn is invoked only for array indexes which have assigned values. It is not invoked for empty slots in sparse arrays.

--> every() does not mutate the array on which it is called, but the function provided as callbackFn can. Note, however, that the length of the array is saved before the first invocation of callbackFn. Therefore:

* callbackFn will not visit any elements added beyond the array's initial length when the call to every() began.

* Changes to already-visited indexes do not cause callbackFn to be invoked on them again.

* If an existing, yet-unvisited element of the array is changed by callbackFn, its value passed to the callbackFn will be the value at the time that element gets visited. Deleted elements are not visited
*/


// Example:---

// Testing size of all array elements:--

function isBigEnough(element,index,array){
    return element>=10

}

var a =[12, 5, 8, 130, 44].every(isBigEnough); // false
 var b = [12, 54, 18, 130, 44].every(isBigEnough); // true
 console.log(a);
 console.log(b);

//  Check if one array is a subset of another array:--
// if all the elements of an array are present in another array.


function isSubSet(array1,array2){
   return  array2.every((element)=>
        array1.includes(element));
}

console.log(isSubSet([1, 2, 3, 4, 5, 6, 7], [5, 7, 6]))//;true
console.log(isSubSet([1, 2, 3, 4, 5, 6, 7], [5,8,7]));//false


// Using every() on sparse arrays :--

// --> every() will not run its predicate on empty slots.

console.log([1,,3].every((x)=> x!==undefined));//true
console.log([1,,3].every((x)=> x ===2));//true

// Affecting Initial Array (modifying, appending, and deleting):--

// the behavior of the every method when the array is modified.

// ----------

 // Modifying items :---

 let arr = [1, 2, 3, 4];

 arr.every((elem,index,arr)=>{
    arr[index+1]--;
    console.log(`[${arr}][${index}] -> ${elem}`);
    return elem < 2
 });

//  Loop runs for 3 iterations, but would
// have run 2 iterations without any modification
//
// 1st iteration: [1,1,3,4][0] -> 1
// 2nd iteration: [1,1,2,4][1] -> 1
// 3rd iteration: [1,1,2,3][2] -> 2

// ---------------
// Appending items

arr = [1, 2, 3];

arr.every((elem,index,arr)=>{
    arr.push("new");
    console.log(`[${arr}][${index}]->${elem}`);
    return elem <  4
})

// Loop runs for 3 iterations, even after appending new items
//
// 1st iteration: [1, 2, 3, new][0] -> 1
// 2nd iteration: [1, 2, 3, new, new][1] -> 2
// 3rd iteration: [1, 2, 3, new, new, new][2] -> 3


// ------------
// Deleting items

arr = [1, 2, 3, 4];

arr.every((elem,index,array)=>{
arr.pop();
console.log(`[${arr}][${index}]-> ${elem}`);
return elem < 4
});

// Loop runs for 2 iterations only, as the remaining
// items are `pop()`ed off
//
// 1st iteration: [1,2,3][0] -> 1
// 2nd iteration: [1,2][1] -> 2


// Calling every() on non-array objects:--

//The every() method reads the length property of this and then accesses each integer index until the end is reached or callbackFn returns false.

const arrayLike = {
    length: 3,
    0: "a",
    1: "b",
    2: "c",
  };

  console.log(
  Array.prototype.every.call(arrayLike, (x) => typeof x === "string")
); // true