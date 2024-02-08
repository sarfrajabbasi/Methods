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


const asyncIterable = (async function*(){
    for(let i=0;i<5;i++){
        await new Promise((resolve)=>{setTimeout(resolve,10*i)});
        yield i;
    }
})();

Array.formAsync(asyncIterable).then((array)=>console.log(array));//[0,1,2,3,4]

// Array from a sync iterable
