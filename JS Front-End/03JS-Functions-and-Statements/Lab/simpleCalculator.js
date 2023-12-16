//втори вариант на решение:
function calculation(numOne, numTwo, operator) {
  const operations = {
    multiply: (numOne, numTwo) => numOne * numTwo,
    divide: (numOne, numTwo) => numOne / numTwo,
    add: (numOne, numTwo) => numOne + numTwo,
    subtract: (numOne, numTwo) => numOne - numTwo,
  };

  // const operatorFunction = operations[operator];
  // const result = operatorFunction(numOne, numTwo);
  // console.log(result);

  console.log(operations[operator](numOne, numTwo));

  //първи вариант на решение:

  // const multiply = (numOne, numTwo) => numOne * numTwo;
  // const divide = (numOne, numTwo) => numOne / numTwo;
  // const add = (numOne, numTwo) => numOne + numTwo;
  // const subtract = (numOne, numTwo) => numOne - numTwo;

  // switch(operator){
  //     case "multiply":
  //         console.log(multiply(numOne,numTwo));
  //         break;
  //     case "divide":
  //         console.log(divide(numOne,numTwo));
  //         break;
  //     case "add":
  //         console.log(add(numOne,numTwo));
  //         break;
  //     case "subtract":
  //         console.log(subtract(numOne,numTwo));
  //         break;
  // }
}

calculation(5, 5, "multiply");
calculation(40, 8, "divide");
calculation(12, 19, "add");
calculation(50, 13, "subtract");
