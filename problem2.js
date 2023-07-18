// Problem Statement 2: Permutations of a given string
// Given a string S. The task is to print all unique permutations of the given string in lexicographically sorted order.
// Example 1:
// Input: ABC

// Output:
// ABC ACB BAC BCA CAB CBA

// Explanation:
// Given string ABC has permutations in 6 forms as ABC, ACB, BAC, BCA, CAB and CBA.


function permuteUnique(string) {
    const result = [];
    const used = new Array(string.length).fill(false);
    const sortedString = string.split('').sort().join('');
    backtrack(sortedString, [], used, result);
    return result;
  }
  
  function backtrack(string, temp, used, result) {
    if (temp.length === string.length) {
      result.push(temp.join(''));
    } else {
      for (let i = 0; i < string.length; i++) {
        if (used[i] || (i > 0 && string[i] === string[i - 1] && !used[i - 1])) {
          continue;
        }
        used[i] = true;
        temp.push(string[i]);
        backtrack(string, temp, used, result);
        used[i] = false;
        temp.pop();
      }
    }
  }
  

  const inputString1 = 'ABC';
  const permutations1 = permuteUnique(inputString1);
  console.log(permutations1);
  
  const inputString2 = 'ABSG';
  const permutations2 = permuteUnique(inputString2);
  console.log(permutations2);
  