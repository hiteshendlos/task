// Problem Statement 4:  Rearrange Array Alternately
// Given a sorted array of positive integers. Your task is to rearrange the array elements alternatively i.e. first element should be max value, second should be min value, third should be second max, fourth should be second min and so on.
// Example 1:
// Input:
// n = 6
// arr[] = {1,2,3,4,5,6}

// Output: 6 1 5 2 4 3

// Explanation: 
// Max element = 6, min = 1, second max = 5, second min = 2, and	so on... Modified 	array is: 6 1 5 2 4 3.

// Problem Statement 5: Longest Common Subsequence
// Given two strings, find the length of longest subsequence present in both of them. Both the strings are in uppercase Latin alphabets.
// Example 1:
// Input:
// A = 6, B = 6
// str1 = ABCDGH
// str2 = AEDFHR

// Output: 3
// Explanation: LCS for input strings “ABCDGH” and “AEDFHR” is “ADH” of length 3.




function rearrangeArrayAlternately(arr) {
    const n = arr.length;
    const result = [];
  
    let i = 0;
    let j = n - 1;
  
    while (i <= j) {
      if (i === j) {
         result.push(arr[i]);
      } else {
        result.push(arr[j]);
        result.push(arr[i]);
      }
  
      i++;
      j--;
    }
  
    return result;
  }
  

  const arr = [1, 2, 3, 4, 5, 6];
  const result = rearrangeArrayAlternately(arr);
  console.log(result);
  