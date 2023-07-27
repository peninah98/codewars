function pillars(numPill, dist, width) {
    if(numPill <= 1){
      return 0
    }
    
    else{
      return ((dist*100)*(numPill -1)) + (width * (numPill -2))
    }
  }
  console.log(pillars(20,200,30))