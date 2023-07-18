// Problem Statement 1: Stock buy and sell
// The cost of stock on each day is given in an array A[] of size N. Find all the segments of days on which you buy and sell the stock so that in bet­ween those days for which profit can be generated.
// Example 1:
// Input:
// N = 7
// A[] = {100,180,260,310,40,535,695}

// Output:
// One possible solution is (0 3) (4 6) We can buy stock on day 0, and sell it on 3rd day, which will give us maximum profit. Now, we buy stock on day 4 and sell it



function findStockBuySell(N, A) {
    const segments = [];
    const profits = [];
  
    A.forEach((price, i) => {
      let buyIndex = i;
      let sellIndex = i;
  
      A.slice(i + 1).map((currentPrice, j) => {
        if (currentPrice > A[sellIndex]) {
          sellIndex = j + i + 1;
        }
      });
  
      if (sellIndex > buyIndex) {
        const profit = A[sellIndex] - A[buyIndex];
        segments.push([buyIndex, sellIndex]);
        profits.push(profit);
      }
    });
  
    return { segments, profits };
  }
  

  const prices1 = [100, 180, 260, 310, 40, 535, 695];
  const result1 = findStockBuySell(7, prices1);
  console.log("Segments:", result1.segments);
  console.log("Profits:", result1.profits);
  
  const prices2 = [4, 2, 2, 2, 4];
  const result2 = findStockBuySell(5, prices2);
  console.log("Segments:", result2.segments);
  console.log("Profits:", result2.profits);
  