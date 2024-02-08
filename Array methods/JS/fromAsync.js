/* 
**Array.fromAsync() Method Overview:**

- **Functionality**: `Array.fromAsync()` creates a new array from async iterable, iterable, or array-like objects, handling asynchronous operations.

- **Syntax**:

  ```javascript
  Array.fromAsync(arrayLike)
  Array.fromAsync(arrayLike, mapFn)
  Array.fromAsync(arrayLike, mapFn, thisArg)
  ```

- **Parameters**:

  - `arrayLike`: An async iterable, iterable, or array-like object to convert into an array.
  - `mapFn` (optional): A function to call on every element before adding to the new array. Awaited internally.
  - `thisArg` (optional): Value used as `this` when executing `mapFn`.

- **Return Value**: A new Promise whose fulfillment value is a new array instance.

- **Description**:

  - `Array.fromAsync()` handles async iterable objects (like ReadableStream and AsyncGenerator), iterable objects, or array-like objects.
  - It iterates asynchronously, similar to `for await...of`, and returns a Promise that resolves to the array instance.
  - If called with a non-async iterable object, it awaits each element before adding to the array.
  - `mapFn` operates on each element, awaiting input and output internally.
  - It differs from `Promise.all()` as it awaits each value sequentially, not concurrently.

*/

// Examples:--

// Array from an async iterable

const asyncIterable = (async function* () {
  for (let i = 0; i < 5; i++) {
    await new Promise((resolve) => {
      setTimeout(resolve, 10 * i);
    });
    yield i;
  }
})();

Array.fromAsync(asyncIterable).then((array) => console.log(array)); //[0,1,2,3,4]

// Array from a sync iterable
Array.fromAsync(new Map([[1.2], [3, 4]])).then((arr) => console.log(arr)); // [[1, 2], [3, 4]]

// Array from a sync iterable that yields promises

Array.fromAsync(
  new Set([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)])
).then((arr) => console.log(arr)); // [1, 2, 3]

// Array from an array-like object of promises

Array.fromAsync({
  length: 3,
  0: Promise.resolve(1),
  1: Promise.resolve(2),
  2: Promise.resolve(3),
}).then((arr) => console.log(arr)); // [1, 2, 3]

// Using mapFn:Both the input and output of mapFn are awaited internally by Array.fromAsync().

function delayedValue(v) {
  return new Promise((resolve) => setTimeout(() => resolve(v), 100));
}

Array.fromAsync(
  [delayedValue(1), delayedValue(2), delayedValue(3)],
  (element) => delayedValue(element * 2),
).then((arr)=> console.log(arr));//[2,4,6]


// Comparison with Promise.all():-- Array.fromAsync() awaits each value yielded from the object sequentially. Promise.all() awaits all values concurrently.



