//Write a function that returns the square of a number
function findSquare(num){
    return num * num;
  }
  console.log(findSquare(2)); 

  //Check if a number is odd or even in JavaScript
  function isEvenOrOdd(n) {
    return (n % 2 == 0);
  }
  let n = 10;
  isEvenOrOdd(n) ? console.log("Even") : console.log("Odd");

  //Write a JS code to find the no of digits in a number
  function digitCount(n)
{
    let count = 0;
    while (n != 0)
    {
        n = Math.floor(n / 10);
        ++count;
    }
    return count;
}
    n = 56231;
   console.log(digitCount(n));

   //Write a JS code to print numbers from 1 to 10
   function printNumbers() {
    for(var num=1; num <= 10; num++) 
    {
      console.log(num);
    }
  }
  printNumbers()
  
  /*Write a JavaScript function that takes an array and a value and search that value in the given array. Write a function which takes two arguments - an array and a value. If the value provided in the argument is found in the array, the function should return the position of the element in an array. If the element is not found, the function should return "-1".    */
  var num = [35, 22, 24, 18, 30, 56, 90];

  function checkValue(value, arr) {
  
    for (var i = 0; i < arr.length; i++) {
      var nums = arr[i];
      if (nums == value) {
        const val = num.findIndex(num => num == nums);
        return val;
      }
    }
    return -1;
  }
  
  document.write('Case 1 : ' + checkValue(30, num)); 
  document.write("<br>");
  document.write('Case 2 : ' + checkValue(100, num));
  

//Create phone number using slice method ------------Assignment 1 JS
function createPhoneNumber(numbers) {

    let conCode = numbers.slice(0, 3);
    country = conCode.join('');
    let areaCode = numbers.slice(3, 6);
    area = areaCode.join('');
    let postCode = numbers.slice(-4);
    post = postCode.join('');
  
    return "(" + country + ")" + " " + area + "-" + post;
  }
  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) // output : (123) 456-7890
  
// findSum(arr, value) function, which takes an array arr, a number and value as input and returns an array of two numbers that add up to value.
// Note: In case there is more than one pair in the array containing numbers that add up to value, you are required to return only one such pair. If no such pair found then simply return false.
// Input: An array and a number value
// Output : An array with two integers a and b ([a,b]) that add up to value 

  function findSum(arr, sum)
    {
        let s = new Set();
        for (let i = 0; i < arr.length; ++i)
        {
            let temp = sum - arr[i];
            if (s.has(temp)) {
                console.log("[" +temp
                    + ", " + arr[i] +"]");
            }
            s.add(arr[i]);
        }
    }

        let arr = [1,21,3,14,5,60,7,6];
        let value = 81;
       findSum(arr,value); // output [21,60]

/* use the concept of polymophism. You need to create a parent class 'shape' which returns the area. Create different classes circle,rectangle, sqaure and triangle which extend the parent class shape and calculate the area. create  a method allShapes that receives an array of shapes and returns cumulative area value of all passed shapes.*/
class Shape {
    area() {
      return 0;
    }
    toString() {
      return Object.getPrototypeOf(this).constructor.name;
    }
  }
  
  class Circle extends Shape {
    constructor(r) {
      super();
      this.radius = r;
    }
  
    area() {
      return Math.PI * this.radius ** 2;
    }
  }
  
  class Rectangle extends Shape {
    constructor(w, h) {
      super();
      this.width = w;
      this.height = h;
    }
  
    area() {
      return this.width * this.height;
    }
  }
  
  class Triangle extends Shape {
    constructor(b, h) {
      super();
      this.base = b;
      this.height = h;
    }
  
    area() {
      return this.base * this.height / 2;
    }
  }
  
  function cumulateShapes(shapes) {
    return shapes.reduce((sum, shape) => {
      if (shape instanceof Shape) {
        console.log(`Shape: ${shape.toString()} - area: ${shape.area()}`);
        return sum + shape.area()
      }
      throw Error('Bad argument shape.');
    }, 0);
  }
  
  const shapes = [new Circle(3), new Rectangle(2, 3), new Triangle(3, 4), new Circle(2)];
  
  console.log(cumulateShapes(shapes));