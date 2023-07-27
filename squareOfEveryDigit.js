function squareDigits(num){
    return parseInt(num.toString().split('').map(digit => digit ** 2).join(''));
    
  }

  console.log(squareDigits(234343))