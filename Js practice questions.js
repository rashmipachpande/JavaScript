//Q1. Write a program that prints even numbers from 1 to 100 in descending order the output should show: 100 98 96 . . . 2
let total=0
var count=0
for (let i = 100; i > 0; i--) {
 if (i % 2 == 0) {
     total=+i
     count++
   console.log(i)
 } 
}
/*Q2: Write a function which accepts list of country names as parameter and returns the longest country name as output.
For example: Cntry_Long(["India", "France", "United States of America"]) Expected output : "United States of America"*/

function Cntry_Long(name)
  {
  return name.reduce(function(lname, country) 
  {
    return lname.length > country.length ? lname : country;
  }, 
"");
}
console.log(Cntry_Long(["India", "France", "United States of America"]));

//Q3: Write a function which accept a number and reverse a number as output. For Example n = 83343; Output : 34338
function reverse(n) {  
    a = String(n)
     return a.split("").reverse().join('');
 }
 console.log(reverse(83343));
 console.log('')


//Q4: Write a function to accept a number as parameter and return false or true based on weather the number is prime or not. A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
function prime(n)
{
if (n==1)
  {
    return false;
  }
  else if(n == 2)
  {
    return true;
  } else
  {
    for(let i = 2; i < n; i++)
    {
      if(n % i == 0)
      {
        return false;
      }
    }
    return true;  
  }
}
console.log(prime(97));

//Q1.Implement a function, findFirstUnique(arr), which takes an array as input and returns the first unique integer in the array.
function findFirstUnique(arr) 
{
    for (let i = 0; i < arr.length; i++)
     {
      let temp = arr.lastIndexOf(arr[i]);
      if (temp !== i) 
      {
        delete arr[temp];
      } else 
      {
        return arr[i];
      }
    }
  }
        console.log(findFirstUnique([9,2,3,2,6,6]))

//Q2.Implement a function rightRotate(arr,n) that will rotate the given array by n in js.
// o/p : [3,4,5,1,2]

const arr=[1,2,3,4,5]
const result= rightRotate(arr,3)
console.log(result)
function rightRotate(arr,n)
{
for(var i = 0;i<arr.length;i++)
{
if(arr[i]==n)
{
return arr.slice(i).concat(arr.slice(0,i))
}
}
}

