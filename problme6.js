// Problem Statement 6: Subarray with 0 sum
// Given an array of positive and negative numbers. Find if there is a subarray (of size at-least one) with 0 sum.
// Example 1:
// Input: 5
// 4 2 -3 1 6

// Output: Yes (2, -3,1)

// Explanation: 
// 2, -3, 1 is the subarray with a Sum 0.
// Example 2:
// Input: 5
// 4 2 0 1 6

// Output: Yes (0)




function subarrayWithZeroSum(arr) {
    const sumSet = new Set();
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
  
      if (arr[i] === 0 || sum === 0 || sumSet.has(sum)) {
        return true;
      }
  
      sumSet.add(sum);
    }
  
    return false;
  }
  
  
  const arr1 = [4, 2, -3, 1, 6];
  const hasZeroSum1 = subarrayWithZeroSum(arr1);
  console.log(hasZeroSum1);
  
  const arr2 = [4, 2, 0, 1, 6];
  const hasZeroSum2 = subarrayWithZeroSum(arr2);
  console.log(hasZeroSum2);
  