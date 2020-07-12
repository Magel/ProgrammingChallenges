function specialPythagoreanTriplet(n) {
    let sumOfabc = n;
   // Good luck!
    for(let a = 1; a < n; a++){
      for(let b = a; b < n; b++){
        let c = n - a - b;
        if( c > 0 ){
          if(c**2 == a**2 + b**2){
            return a*b*c;
          }
        }
      }
    }
   }
   console.log(specialPythagoreanTriplet(1000))
   
   /**
    Tentei fazer com uso de mais matemática, mas ficou pior. Então peguei a cola da resposta do código, que é bem simples. 
    * 
    * Project Euler: Problem 9: Special Pythagorean triplet
   A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
   
   a2 + b2 = c2
   For example, 32 + 42 = 9 + 16 = 25 = 52.
   
   There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n.
   
   Obtenção de trios pitagóricos por fórmulas de álgebra geométrica
   Dado um triângulo retângulo seja a o cateto menor, seja b o outro cateto, seja c a hipotenusa.
   
   Dado t=2(c-b) e m=(a+b-c)/2(c-b) ou m = b/(a+c-b), a álgebra geométrica permite a obtenção das equações.
   
   a = t(2.m + 1),b = t(2.m^2 + 2.m),  c = t(2.m^2 + 2.m +1).
   https://pt.wikipedia.org/wiki/Terno_pitag%C3%B3rico
   
    */
   
   