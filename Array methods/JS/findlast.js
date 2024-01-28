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
          return false
        }
    }
  return true
}


const arr1 = [1,2,4,6,9,12,16,18,20]
const arr2 = [1,2,3,4,5,6,6,9,11,23,27,33,37,47,43,21];
console.log(arr1.findLast(isPrime));
console.log(arr2.findLast(isPrime));