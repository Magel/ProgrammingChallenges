function largestPalindromeProduct(n) {
 
    let max = Math.pow(10,n)-1;
    let min = Math.pow(10,n)/10;
    let testPalindrome = 0;
    let maxPalindrome = 0;
    for( let i = max; i >= min; i--){
      for(let j = max; j >= min; j--){
         testPalindrome = i * j;
         if(isPalindrome(testPalindrome)){
           if(testPalindrome > maxPalindrome){
             maxPalindrome = testPalindrome;
           }
         }
      }   
    }
   return maxPalindrome;
   }
   
   largestPalindromeProduct(3);
   
   function isPalindrome(n){
     if( n < 0 ) return false;
     let reversed = 0, y = n;
   
     while(y > 0){
       const lastDigit = y % 10;
       reversed = (reversed * 10) + lastDigit;
       y = (y / 10 ) | 0
     }
     return n === reversed
   }

   /*
   https://dev.to/acupoftee/leetcode-palindrome-number-w-fun-javascript-mathematical-approach-1obi
   Usei a função descrita acima, pois a solução foi matemática, sem usar string. 
   Preferia a minha solução àquela proposta, pois não usei array nem string para definir o max e o min. 
   */