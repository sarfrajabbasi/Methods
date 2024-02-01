/*  
#  Array.prototype.forEach():-- The forEach() method of Array instances executes a provided function once for each array element.


### Syntax :-- forEach(callbackFn(element,idx,arr),thisArg)

### Return Value :-- None(undefined)

*/


// Examples:--

const array1 = ['a', 'b', 'c'];
const ratings = [5, 4, 5];

let sum = 0;

const sumFunction = async (a, b) => a + b;


// forEach

array1.forEach((el)=> console.log(el))

// forEach() expects a synchronous function — it does not wait for promises. Make sure you are aware of the implications while using promises (or async functions) as forEach callbacks.

ratings.forEach(async (rating)=> {
    sum = await sumFunction(sum,rating);
})

// expect:14
console.log(sum);//0


// Printing the contents of an array

const logArrEl = (el,idx)=>{
    console.table(idx,el)
}

[2,3,4,,5].forEach(logArrEl);


// Using thisArg

// updates an object's properties from each entry in the array:


class Counter{
    constructor(){
        this.sum = 0;
        this.count = 0;
    }


    add(arr){
// Only function expressions have their own this bindings.

arr.forEach(function countEntry(entry){
    this.sum += entry;
    ++this.count;
},this)
    }
}

const obj = new Counter();

obj.add([2,4,5,6,7]);
console.log(obj.count);
console.log(obj.sum);

// Flatten an array(infinite)

const flatten = (arr)=>{
    const result =[];

    arr.forEach((item)=>{
        if(Array.isArray(item)){
            // recusive
            result.push(...flatten(item))
        }else{
            // base
            result.push(item)
        }
    })

    return result

}

// Usage
const nested = [1, 2, 3, [4, 5, [6,[2,[2,[2,[2]]]], 7], 8, 9]];
console.log(flatten(nested)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]


// Using the third argument of callbackFn


const numbers = [3, -1, 1, 4, 1, 5];

numbers.filter((num)=>num>0).forEach((num,idx,arr)=>{
    console.log(arr[idx-1],num,arr[idx+1]);
})

