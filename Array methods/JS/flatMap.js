/* FlatMap:-- The flatMap() method of Array instances returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), but slightly more efficient than calling those two methods separately.

- Syntax:- flatMap(callbackFn(element,index,array), thisArg)
- Return :- A new array with each element being the result of the callback function and flattened by a depth of 1.

*/

// Pre-allocate and explicitly iterate

const arr = [1, 2, 3, 4, 5];

arr.flatMap((x) => [x, x * 2]);

// is equivalent to

const n = arr.length;

const acc = new Array(n * 2);

for(let i=0;i<n;i++){
    const x = arr[i];
    acc[i*2]
}

const newArr2 = arr.flatMap((e)=> [e*2]);

const newArr = arr.map((e)=> [e*2]);
const flatArr = newArr.flat(2);
const flatArr2 = arr.flat(2).map((x)=>x*3);

// console.log(newArr);
console.log(newArr2);
console.log(flatArr);
console.log(flatArr2);


const arr1 = ["it's Sunny in", "", "California"];

const ar = arr1.map(x=>x.split(' '));
const ar1 = arr1.flatMap(x=>x.split(' '));
console.log(ar);
console.log(ar1);

// For adding and removing items during a map()

const a = [5, 4, -3, 20, 17, -33, -4, 18];

const result = a.flatMap((n)=>{
    // Let's say we want to remove all the negative numbers
// and split the odd numbers into an even number and a 1
    if(n<0){
        return []
    }
    return n%2===0?[n]:[n-1,1]
})

console.log(result);

// Using the third argument of callbackFn

const stations = ["New Haven", "West Haven", "Milford (closed)", "Stratford"];
const line = stations
  .filter((name) => !name.endsWith("(closed)"))
  .flatMap((name, idx, arr) => {
    // Without the arr argument, there's no way to easily access the
    // intermediate array without saving it to a variable.
    if (idx === arr.length - 1) return []; // last station has no next station
    return [`${name} - ${arr[idx + 1]}`];
  });
console.log(line); // ['New Haven - West Haven', 'West Haven - Stratford']

console.log(line);


// Using flatMap() on sparse arrays

// The callbackFn won't be called for empty slots in the source array because map() doesn't, while flat() ignores empty slots in the returned arrays.

console.log([1, 2, , 4, 5].flatMap((x) => [x, x * 2])); // [1, 2, 2, 4, 4, 8, 5, 10]
console.log([1, 2, 3, 4].flatMap((x) => [, x * 2])); // [2, 4, 6, 8]


// Calling flatMap() on non-array objects

// The flatMap() method reads the length property of this and then accesses each property whose key is a nonnegative integer less than length. If the return value of the callback function is not an array, it is always directly appended to the result array.


const arrayLike = {
    length: 3,
    0: 1,
    1: 2,
    2: 3,
    3: 4, // ignored by flatMap() since length is 3
  };
  console.log(Array.prototype.flatMap.call(arrayLike, (x) => [x, x * 2]));
  // [1, 2, 2, 4, 3, 6]
  
  // Array-like objects returned from the callback won't be flattened
  console.log(
    Array.prototype.flatMap.call(arrayLike, (x) => ({
      length: 1,
      0: x,
    })),
  );
  // [ { '0': 1, length: 1 }, { '0': 2, length: 1 }, { '0': 3, length: 1 } ]
  