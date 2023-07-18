// Problem Statement 5: Longest Common Subsequence
// Given two strings, find the length of longest subsequence present in both of them. Both the strings are in uppercase Latin alphabets.
// Example 1:
// Input:
// A = 6, B = 6
// str1 = ABCDGH
// str2 = AEDFHR

// Output: 3
// Explanation: LCS for input strings “ABCDGH” and “AEDFHR” is “ADH” of length 3.

// Example 2:
// Input:
// A = 3, B = 2
// str1 = ABC
// str2 = AC

// Output: 2
// Explanation: LCS of "ABC" and "AC" is "AC" of length 2.


function longestCommonSubsequence(str1, str2) {
    const m = str1.length;
    const n = str2.length;
  
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (str1[i - 1] === str2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }
  
    return dp[m][n];
  }
  

  const str1 = "ABCDGH";
  const str2 = "AEDFHR";
  const length1 = longestCommonSubsequence(str1, str2);
  console.log(length1);
  
  const str3 = "ABC";
  const str4 = "AC";
  const length2 = longestCommonSubsequence(str3, str4);
  console.log(length2);
  