/* 

# Array.from():--
The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

## Syntax:-- Array.from(arrayLike, mapFn, thisArg)

## Return value :-  A new Array instance.

*/


const foo = Array.from('foo');

console.log(foo);

const num = Array.from([1,2,3],(x)=>{
    x*x
});

console.log(num);