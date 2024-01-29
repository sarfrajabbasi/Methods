const array1 = [5, 12, 50, 130, 44];

function isPrime(element) {
  if (element % 2 === 0 || element < 2) {
    return false;
  }
    for(let factor =3;factor<=Math.sqrt(element);factor +=2){
        if(element % factor === 0){
            return false;
        }
    }
  return true
}


console.log([4,6,8,12].findLastIndex(isPrime));//-1
console.log([4,6,8,12,5,9,11,13,].findLastIndex(isPrime));//5

// Using the third argument of callbackFn

const numbers = [3, -1, 1, 4, 1, 5, 9, 2, 6];
const lastTrough = numbers
  .filter((num) => num > 0)
  .findLastIndex((num, idx, arr) => {
    // Without the arr argument, there's no way to easily access the
    // intermediate array without saving it to a variable.
    if (idx > 0 && num >= arr[idx - 1]) return false;
    if (idx < arr.length - 1 && num >= arr[idx + 1]) return false;
    return true;
  });
console.log(lastTrough); // 6


// Using findLastIndex() on sparse arrays


console.log([1, , 3].findLastIndex((x) => x === undefined)); // 1


// Calling findLastIndex() on non-array objects

const arrayLike = {
    length: 3,
    0: 2,
    1: 7.3,
    2: 4,
    3: 3, // ignored by findLastIndex() since length is 3
  };
  console.log(
    Array.prototype.findLastIndex.call(arrayLike, (x) => Number.isInteger(x)),
  ); // 2
  