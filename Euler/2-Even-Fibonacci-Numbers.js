/*
Project Euler: Problem 2: Even Fibonacci Numbers
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
By considering the terms in the Fibonacci sequence whose values do not exceed n, find the sum of the even-valued terms.
fiboEvenSum(10) should return a number.
fiboEvenSum(10) should return 10.
fiboEvenSum(60) should return 44.
fiboEvenSum(1000) should return 798.
fiboEvenSum(100000) should return 60696.
fiboEvenSum(4000000) should return 4613732.
Your function should return an even value.
*/
function fiboEvenSum(n) {
    // You can do it!
    let evenSum = 0;
    
    let a = 1;
    let b = 2;
    let sum = b;

    while ( b <= n ) {
       
        let temp = a; 
        a = b
        b = temp + b;
        if ( b % 2 === 0) {
            sum += b;
        }        
    }
    return sum;
  }
  
console.log(fiboEvenSum(10));