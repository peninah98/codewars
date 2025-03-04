const mergeArray = (arr1, arr2) =>{
    // return [...arr1,...arr2]
    for(let i = 0; i< arr1.length; i++){
      arr2.push(arr1[i])  
    }
    return arr2
}

console.log(mergeArray([4, 5, 6], [4, 5, 6,12]))