//Array: Storing multiple values in a single variable

// IN C, arrays were homogenous, all the values had to be of the same data type

// IN JS, arrays were heterogenous, all the values need not be of the same data type

//Using Array Literal
// const numbers = [1,2,3,4,5, 'Newton', true, 10.5]

//Using the Array constructor
// const numbers = new Array()

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers[0]) //1

// console.log(numbers)

// document.write(numbers)

// alert(numbers)

// for (let i = numbers.length - 1; i >= 0; i--) {
//   document.write(numbers[i] + "&nbsp;&nbsp;&nbsp;");
// }

// push(), pop, shift, unshift, splice, slice
// indexOf, lastIndexOf, includes

//push: adds values to the end
//pop: removes 1 value from the end

// numbers.push(6,7)
// numbers.pop()
// numbers.pop()

//shift: removes 1 value from the start
//unshift: adds values to the start
// numbers.unshift(10,11)
// numbers.shift()
// numbers.shift()
// console.log(numbers)

const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.push(6,7,10))

// console.log(numbers.pop())

// console.log(numbers.shift())

// console.log(numbers.unshift(11,12,13))

//splice

// numbers.splice(2, 0, 6,7,8)
// numbers.splice(2, 2, 6,7,8)

// numbers.splice(3,2)

// console.log(numbers) //

// console.log(numbers.splice(2,1)) //

// console.log(numbers.splice(2, 2).length); //[3,4] = 2

//MDN

function sumOfProductOfDigits(n1, n2) {
  //which number has higher digits
  let output = 0;
  if (n1.length > n2.length) {
    for (let i = n1.length - 1; i >= 0; i--) {
      if (n2[i] !== undefined) output += n2[i] * n1[i];
      else output += n1[i] * 0;
    }
  } else {
    if (n2.length > n1.length) {
      for (let i = n2.length - 1; i >= 0; i--) {
        if (n1[i] !== undefined) output += n2[i] * n1[i];
        else output += n2[i] * 0;
      }
    } else {
      for (let i = 0; i < n1.length; i++) {
        output += n1[i] * n2[i];
      }
    }
  }
  return output;
}

sumOfProductOfDigits(10, 150);
