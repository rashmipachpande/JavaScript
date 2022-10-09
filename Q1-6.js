//        Given an integer x, return true if x is palindrome integer.
//        An integer is a palindrome when it reads the same backward as forward.
//          For example, 121 is a palindrome while 123 is not.
//                            Example 1:
// Input: x = 121 Output: true Explanation: 121 reads as 121 from left to right and from right to left.
//                            Example 2:
// Input: x = -121 Output: false Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  let number = x;
  let reverse = 0;
  while (number > 0) {
    reverse = reverse * 10 + (number % 10);
    number = parseInt(number / 10);
  }
  return x === reverse;
};
console.log(isPalindrome(121)); // Example 1
console.log(isPalindrome(-121)); // Example 2

//  Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
//       Example:
// Input: nums = [0,0,1,1,1,2,2,3,3,4]   Output: 5,    nums = [0,1,2,3,4] 
//Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.


var removeDuplicates = function (nums) {
 
  let count = 0;

  for (let i = 0; i < nums.length; i++) {

      if (i < nums.length - 1 && nums[i] == nums[i + 1]) {
        
          continue;
      }

      nums[count] = nums[i];
    
      count++;
  }

return count;
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

var int = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

var uniqueInt = [...new Set(int)];

console.log("num=",uniqueInt);

// Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.
//              Example 1:
// Input: s = "Hello World" Output: 5 Explanation: The last word is "World" with length 5.
//           Example 2:
// Input: s = " fly me to the moon " Output: 4 Explanation: The last word is "moon" with length 4.


function lengthOfLastWord()
{
    let len = 0;
  //  x = a.trim(); // trim is method of string
  x = input;
    for (let i = 0; i < x.length; i++)
      {
        if (x[i] == ' ') {
            len = 0;
        }
        else {
            len++;
        }
    }
 
    return len;
}
 
input  = "Hello World";
console.log(lengthOfLastWord(input));

// s = " fly me to the moon " ;
// console.log(lengthOfLastWord(s));


// // You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
//                    Example 1:
// Input: prices = [7,1,5,3,6,4] Output: 5 Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5. Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
//                    Example 2:
// Input: prices = [7,6,4,3,1] Output: 0 Explanation: In this case, no transactions are done and the max profit = 0.

const prices = [7, 1, 5, 3, 6, 4] // example 1
//const prices = [7, 6, 4, 3, 1]      // example 2
function maxProfit(prices) 
{
  let globalProfit = 0;
	// the reason prices.length - 1 is because we are using the second for loop to scan every element to the right of i
  for (let i = 0; i < prices.length - 1; i++) 
  {
    
	  // the reason j is i + 1 is because we are scanning all the combinations of the first for loop
    for (let j = i + 1; j < prices.length; j++)
      {
      const currentProfit = prices[j] - prices[i]

      if (currentProfit > globalProfit) {
        globalProfit = currentProfit
      }
    }
  }

  return globalProfit;
}
console.log(maxProfit(prices))

// // You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.
//              Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4] Output: [1,1,2,3,4,4]

let list1 = [1, 2, 4];
let list2 = [1, 3, 4];

 function SortedLinkedlist(list1, list2) {
  
        if (list1 == null)
            return list2;
        if (list2 == null)
            return list1;
  
        if (list1.data < list2.data) {
            list1.next = SortedLinkedlist(list1.next, list2);
            return list1;
        } else {
            list2.next = SortedLinkedlist(list1, list2.next);
            return list2;
        }
    }

console.log(SortedLinkedlist());

// recursion

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.
//            Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4] Output: 6 Explanation: [4,-1,2,1] has the largest sum = 6.
//            Example 2:
// Input: nums = [1] Output: 1
//            Example 3:
// Input: nums = [5,4,-1,7,8] Output: 23

//let nums = [-2,1,-3,4,-1,2,1,-5,4]; // example 1 
//let nums = [1] // example2
let nums = [5,4,-1,7,8] // example 3
let n = nums.length;

function contiguousSubarray(nums,size)
{
  let max = nums[0];
  let curr_max = nums[0];
 
  for (let i = 1; i < size; i++)
  {
      curr_max = Math.max(nums[i], curr_max+nums[i]);
      max = Math.max(max, curr_max);
  }
 
return max;
}

console.log(contiguousSubarray(nums, n));

//Algorithmic Paradigm: Dynamic Programming


//Implement a function, findFirstUnique(arr), which takes an array as input and returns the first unique integer in the array.
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

        //Implement a function rightRotate(arr,n) that will rotate the given array by n in js.
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

////Q1. Even numbers in descending order

let total=0
var count=0
for (let i = 100; i > 0; i--) {
 if (i % 2 == 0) {
     total=+i
     count++
   console.log(i)
 } 
}


//Q2. longest country name

function Cntry_Long(name)
  {
  return name.reduce(function(lname, country) 
  {
    return lname.length > country.length ? lname : country;
  }, 
"");
}
console.log(Cntry_Long(["India", "France", "United States of America"]));


//Q3. reverse number

function reverse(n) {  
    a = String(n)
     return a.split("").reverse().join('');
 }
 console.log(reverse(83343));
 console.log('')
 
 
 //Q4. prime or not
 
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

// Write a function which returns all unique numbers from the array.
// const arr = [1,2,3,4,5,1,2]
// output - [3,4,5]

const num = [1,2,3,4,5,1,2];
const unique = (arr) => {
  const uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
    }
    if (count == 1) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
};
console.log(unique(num));
// testcases : [1,2,3,4,1,2,3,4] ; [0]; []; [1,2,1,2,3,4,6,5,6]