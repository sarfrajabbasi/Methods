/*  


# Array.from() Method Overview:

## Functionality: Array.from() creates a new array by copying values from an iterable or array-like object.

## Syntax:

```js
// javascript
Array.from(arrayLike)
Array.from(arrayLike, mapFn)
Array.from(arrayLike, mapFn, thisArg)

```
## Parameters:

   - arrayLike: An iterable or array-like object to convert into an array.

   - mapFn (optional): A function applied to each element before adding to the new array.

   - thisArg (optional): Value used as this when executing mapFn.

   - Return Value: A new array instance.



## Description:

Array.from() accepts iterable objects (like Map and Set) or array-like objects (with a length property and indexed elements).
It never creates a sparse array; missing index properties become undefined.
The optional mapFn parameter executes a function on each element similar to map().
Important for typed arrays to avoid truncation of values during conversion.
*/


// Examples:-- Array from different sources

// string

const foo = Array.from('foo')//["f", "o", "o"]
console.log(foo);

// set

const set  = Array.from(new Set(["foo","bar","baz"]))// ["foo", "bar", "baz"]

console.log(set);

// Map

const map = Array.from(new Map([[1,2],[2,4],[4,8]]))//[[1,2],[2,4],[4,8]]

console.log(map);


const mapper = new Map([
   ["1", "a"],
   ["2", "b"],
 ]);

 console.log(Array.from(mapper.values()));
 console.log(Array.from(mapper.keys()));



//  Array from a NodeList
// // Create an array based on a property of DOM Elements

const images = document.querySelectorAll('img');
const sources = Array.from(images,image=> image.src);
console.log(sources);
const insecureSources = sources.filter((link)=> link.startsWith('http://'));
console.log(insecureSources);

function f(){
   return Array.from(arguments)
}

console.log(f(1,2,3,4,5,6,6));