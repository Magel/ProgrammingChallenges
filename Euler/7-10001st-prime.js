
function nthPrime(n) {
    // Good luck!
    let i = 2;
    let countN = 0;
  
    while(countN !== n){
      if( isPrime(i) ) {
        countN++;
      }  
      if ( countN === n ){
        return i;
      }
      i++
    }
  }
  console.log(nthPrime(1000));
  
  function isPrime(n) {
    for(let i = 2; i < n; i++){
      if( n % i === 0 ) return false;
    } 
    return true
  }
  
  console.log(isPrime(11));

/**
 * Project Euler: Problem 7: 10001st prime
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the nth prime number?
 */