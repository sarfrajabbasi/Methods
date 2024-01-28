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
  

  function isNotEnough(item){
    return item.quantity <= 2;
  }


  console.log(inventory.findLast(isNotEnough));


  