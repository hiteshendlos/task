// Problem Statement 3:  Spirally traversing a matrix
// Given a matrix of size r*c. Traverse the matrix in spiral form.
// Example 1:
// Input:
// r = 4, c = 4
// matrix[][] = {{1, 2, 3, 4},{5, 6, 7, 8},{9, 10, 11, 12},{13, 14, 15,16}}
// Output: 
// 1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10




function spiralTraversal(matrix) {
    const result = [];
  
    if (matrix.length === 0) {
      return result;
    }
  
    let topRow = 0;
    let bottomRow = matrix.length - 1;
    let leftCol = 0;
    let rightCol = matrix[0].length - 1;
  
    while (topRow <= bottomRow && leftCol <= rightCol) {
    
      for (let i = leftCol; i <= rightCol; i++) {
        result.push(matrix[topRow][i]);
      }
      topRow++;
  
     
      for (let i = topRow; i <= bottomRow; i++) {
        result.push(matrix[i][rightCol]);
      }
      rightCol--;
  
    
      if (topRow <= bottomRow) {
      
        for (let i = rightCol; i >= leftCol; i--) {
          result.push(matrix[bottomRow][i]);
        }
        bottomRow--;
      }
  
      if (leftCol <= rightCol) {
       
        for (let i = bottomRow; i >= topRow; i--) {
          result.push(matrix[i][leftCol]);
        }
        leftCol++;
      }
    }
  
    return result;
  }

  const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];
  
  const result = spiralTraversal(matrix);
  console.log(result);
  