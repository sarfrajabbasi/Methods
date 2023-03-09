// Array.prototype[@@iterator]():-------

// The @@iterator method of an Array object implements the iterable protocol and allows arrays to be consumed by most syntaxes expecting iterables, such as the spread syntax and for...of loops. It returns an iterator that yields the value of each index in the array.

// Syntax:---

// array[Symbol.iterator];

// Return value:---

// The same return value as Array.prototype.values(): a new iterable iterator object that yields the value of each index in the array.

// Example:--

// iteration using for..of loop:-----

const arr = ["a","b","c"];

const letterResult = document.getElementById("letterResult");

for(const letter of arr){
    const li = document.createElement("li");
    li.textContent = letter;

    letterResult.appendChild(li);
}

// Manually hand-rolling the iterator:------

// call next() manually to acheive max. control over the iteration process.

const arr2 = ["e","f"];

const arrIter = arr2[Symbol.iterator]();
console.log(arrIter.next().value);
console.log(arrIter.next().value);



// Handling strings and string arrays with the same function:---

// Because both strings and arrays implement the iterable protocol, a generic function can be designed to handle both inputs in the same fashion. This is better than calling Array.prototype.values() directly, which requires the input to be an array, or at least an object with such a method.

function logIterable(it){
    if(typeof it[Symbol.iterator] !== "function"){
        console.log(it,"is not iterable.");
        return;
    }

    for(const letter of it){
        console.log(letter);
    }
}

// Array:-- 

logIterable(["a","b","c"]);

// a
// b
// c

// String:---

logIterable("abc");

// a
// b
// c

// Number:--
logIterable(123);// 123 not iterable.
