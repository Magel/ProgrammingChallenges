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
  