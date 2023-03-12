// Array.prototype.filter():---

/*
--> The filter method creates a shallow-Copy of a portion of a given array,filtered down to just the element form the given array that pass the test implemented by the provided function.

--> Syntax:--
*  Arrow function

 -> filter((element, index, array) => { .... })

* Callback function

-> filter(callbackFn, thisArg)

* Inline callback function

-> filter(function (element, index, array) { .... }, thisArg)

* Parameters:-- 
--> callbackFun :-- (element,index,array,thisArg);

* Return-value:-- A Shallow copy of a portion of the given array,fillter down the element that pass the text by provided by functions.if no element pass the test,an empty array will be returned.

* Description :-- The filter method is an iterative method,it calls a provided callbackFn once for each element in the array and constructs a new array elements which do not pass  the cb test are not include in the new array.
--> cb not invoked on empty slots in sparse arrays.
--> cb will not visit any elements added beyond the array's inital length when the call to filter() began.
--> Changes to already-visited indexes do not cause callbackFn to be invoked on them again.
-->  Deleted elements are not visited.

--> the filter methods only expects the this value to have a length property and integer-keyed properties.

*/
// Examples: ---


const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(w => w.length > 6);

console.log(result);// ["exuberant", "destruction", "present"]


// Filtering out all small values:---

// --> The filter() to create a filtered array that has all elements with values less than 10 removed.

function isBigEnough(value){
    return value >= 10;
}

const arr = [12,5,8,130,44];

const filtered = arr.filter(isBigEnough);// [12,130,44];


// Find all prime numbers in an array:--

// --> returns all prime numbers in the array.

const array = [-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13];

function isPrime(num){
    for(let i=2;num > i;i++){
        if(num % i ==0){
            return false
        }
    }
    return num > 1
}

console.log(array.filter(isPrime));//[2, 3, 5, 7, 11, 13]


// Filtering invalid entires form JSON:--

//  --> Filter() to create a filetred JSON of all elements with Non-Zero,numeric id.

const arr2 = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    {},
    { id: null },
    { id: NaN },
    { id: "undefined" },
  ];

  let invalidEntires = 0;

  function filterByID(item){
    if(Number.isFinite(item.id) && item.id !==0){
        return true;
    }
    invalidEntires++;
    return false
  }

  const arrByID = arr.filter(filterByID);

  console.log("Filtered Array \n",arrByID);

// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log("Number of Invalid Entries = ",
invalidEntires);

// Number of Invalid Entries = 5


// Searching in array :---

// --> Filter array content based on search criteria.

const fruits = ["apple", "banana", "grapes", "mango", "orange"];

// --> Filter array items based on search criteria(query)

function filterItems(arr,query){
    return arr.filter((e)=> e.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits,"ap"));//['apple', 'grapes']
console.log(filterItems(fruits,"an"));// ['banana', 'mango', 'orange'];


// Using filter() on sparse arrays :------

// --> Filter() will skip empty slots.

console.log([1,,undefined].filter((x)=> x === undefined));// [undefined]
console.log([1,,undefined].filter((x)=> x !== 2));// [1,undefined]


// Calling filter() on Non-array Objects:---

// --> The filter() method reads the length property of this and then accesses each integer index.

const arrayLike = {
    length: 3,
    0: "a",
    1: "b",
    2: "c",
  };

  console.log(Array.prototype.filter.call(arrayLike,(x)=> x <= "b"));
// [ 'a', 'b' ]

// Affecting Initial Array (modifying, appending and deleting):-----

// Modifying each word
let word2 = ["spray", "limit", "exuberant", "destruction", "elite", "present"];

const modifiedWords = words.filter((word,index,arr)=>{
arr[index+1] += "Extra";
return word.length < 6
});
console.log(modifiedWords);
// ["spray"]
// Notice there are three words below length 6, but since they've been modified one is returned
word2 = ["spray", "limit", "exuberant", "destruction", "elite", "present"];

const appendedWords = word2.filter((word,index,arr)=>{ 
    arr.push("New");
    return word.length <6
  });

  console.log(appendedWords);

  // ["spray" ,"limit" ,"elite"]
// Only three fits the condition even though the `words` itself now has a lot more words with character length less than 6

word2 = ["spray", "limit", "exuberant", "destruction", "elite", "present"];

const deleteWords = word2.filter((word,index,arr)=>{
    arr.pop();
    return word.length  < 6;
})

console.log(deleteWords);
// ["spray" ,"limit"]

// Notice 'elite' is not even obtained as it's been popped off 'words' before filter can even get there