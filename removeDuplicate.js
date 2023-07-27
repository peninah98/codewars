function solve(arr) {

  
    let result =[]
    while(arr.length > 0){
      let poppedElement =arr.pop()
      if(!result.includes(poppedElement)){
        result.push(poppedElement)
    }
    }
    
    
    return result.reverse()
    
}
