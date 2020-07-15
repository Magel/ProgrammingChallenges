function primeSummation(n) {

  let prime = [];
  let sum = 0;

  for(let i = 0; i < n; i++){ 
    prime[i] = i+2;
  }

  for(let p = 2; p*p <= n; p++){
    
    // If prime[p] is not changed, then it is a prime 
    if(prime[p] > 0){
      for(let i = p*p; i <= n; i += p ){
        prime[i] = 0;
      }
    }
  }

  for(let i = 2; i < prime.length; i++){
      if( prime[i] > 0 ){
        sum = sum + i;

      }
    } 
    return sum
  }

console.log(primeSummation(17));



  /**Project Euler: Problem 10: Summation of primes
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below n.

Colei deste site: https://www.geeksforgeeks.org/sieve-of-eratosthenes/
// C# program to print all primes 
// smaller than or equal to n 
// using Sieve of Eratosthenes 
using System; 

namespace prime 
{ 
	public class GFG 
	{	 
				
		public static void SieveOfEratosthenes(int n) 
		{ 
			
		// Create a boolean array "prime[0..n]" and initialize 
		// all entries it as true. A value in prime[i] will 
		// finally be false if i is Not a prime, else true. 

		bool[] prime = new bool[n+1]; 
		
		for(int i = 0; i < n; i++) 
			prime[i] = true; 
		
		for(int p = 2; p*p <= n; p++) 
		{ 
			// If prime[p] is not changed, 
			// then it is a prime 
			if(prime[p] == true) 
			{ 
				// Update all multiples of p 
				for(int i = p*p; i <= n; i += p) 
					prime[i] = false; 
			} 
		} 
		
		// Print all prime numbers 
		for(int i = 2; i <= n; i++) 
		{ 
			if(prime[i] == true) 
				Console.Write(i + " "); 
		} 
			
		} 
		
		// Driver Code 
		public static void Main() 
		{ 
			int n = 30; 
			Console.WriteLine("Following are the prime numbers"); 
			Console.WriteLine("smaller than or equal to " + n); 
			SieveOfEratosthenes(n); 
			
		} 
	} 
} 

// This code is contributed by Sam007. 

Outro sugerido pelo frecodecamp
function primeSummation(n) {
  
  // Initializing the array and sum which hold all prime numbers and the total sum, respectively
  let nums = []
  let sum = 0;
  
  // Upperbound of `n`
  const upperBound = Math.ceil(Math.sqrt(n));
  
  // Making an array of `n` numbers
  for (let i = 0; i < n; i++){
    nums.push(i);   
  }
  nums[1] = 0;
  
  // Looping until the upperbound
  for (let i = 2; i <= upperBound; i++){
    
    // Skipping if the number is already 0
    if (nums[i] !== 0){
    
      // Explcitly marking all multiples of `i` 0 
      for (let j = i*i; j < n; j += i){
        if (nums[j] % i == 0) {
          nums[j] = 0;
        }
      }
    }
  }
  
  // Sum and return all values in the array up to `n`
  for (let i = 0; i < n; i++){
    sum += nums[i];
  }
  return sum;
}

*/