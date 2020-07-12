function smallestMult(n) {
    // Good luck!
    let nTest = 1;
    while(true){
      for(let i = 1; i <= n; i++){
        if( nTest % i === 0 ){
          if( i !== n ){
            continue;
          } else {return nTest};
        } else {break}
      }
    nTest++;
    }
  }
  
  console.log(smallestMult(5));
  

  /*
  Problem Explanation
In this challenge we need to find the LCM of 1 to n numbers.
To find LCM of a number we use the following formula:
lcm
To find GCD (Greatest Common Divisor) of two number we use Euclidean algorithm.
Once we get LCM of two numbers, we can get LCM of the numbers from 1 to n.
Solutions
Solution 1 (Click to Show/Hide)
//LCM of two numbers
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

//Euclidean recursive algorithm
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function smallestMult(n) {
  let maxLCM = 1;

  //Getting the LCM in the range
  for (let i = 2; i <= n; i++) {
    maxLCM = lcm(maxLCM, i);
  }
  return maxLCM;
}
Relevant Links 
Euclidean algorithm https://en.wikipedia.org/wiki/Euclidean_algorithm
LCM https://en.wikipedia.org/wiki/Least_common_multiple
  */