/* this method iterate the array in reverse order and returns the value of first element that satisfies the provided testing function.if no element satisfy the testing function ,undefined is returned.

 Syntax:-- findLast(callback(element,index,array),thisArg) 
 
 
 */

//  Examples:--

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "fish", quantity: 1 },
  { name: "cherries", quantity: 5 },
];

function isNotEnough(item) {
  return item.quantity <= 2;
}

console.log(inventory.findLast(isNotEnough));

//   Find the last prime number in an array

function isPrime(element) {
  if (element % 2 === 0 || element < 2) {
    return false;
  }

  for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
    if (element % factor === 0) {
      return false;
    }
  }
  return true;
}

const arr1 = [1, 2, 4, 6, 9, 12, 16, 18, 20];
const arr2 = [1, 2, 3, 4, 5, 6, 6, 9, 11, 23, 27, 33, 37, 47, 43, 21];
console.log(arr1.findLast(isPrime));
console.log(arr2.findLast(isPrime));

// Using the third argument of callbackFn :The "array" argument is useful if you want to access another element in the array, especially when you don't have an existing variable that refers to the array.

const numbers = [3, -1, 1, 4, 1, 5, 9, 2, 6];

const lasttrough = numbers
  .filter((num) => num > 0)
  .findLast((num, idx, arr) => {
    if (idx > 0 && num >= arr[idx - 1]) return false;
    if (idx < arr.length && num >= arr[idx + 1]) return false;
    return true;
  });

console.log(lasttrough);

// Using findLast() on sparse arrays:Empty slots in sparse arrays are visited, and are treated the same as undefined.

const array = [0, 1, , , , 5, 6];

console.log(
  array.findLast((value, index) => {
    console.log(`Visited index ${index} with value ${value}`);
  })
);

array.findLast((value, index) => {
  if (index === 6) {
    console.log(`Deleting array[5] with value ${array[5]}`);
    delete array[5];
  }
  // Element 5 is still visited even though deleted
  console.log(`Visited index ${index} with value ${value}`);
});

// Calling findLast() on non-array objects :-- The findLast() method reads the length property of this and then accesses each property whose key is a nonnegative integer less than length.

const arrayLike = {
  length: 3,
  0: 2,
  1: 7.3,
  2: 4,
  3: 3, // ignored by findLast() since length is 3
};

console.log(Array.prototype.findLast.call(arrayLike,(x)=> Number.isInteger(x)));//4

