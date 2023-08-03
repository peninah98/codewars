function isogram(str){
    let set = new Set(str.toLowerCase())
    let result = Array.from(set).join('')

    if(result.length === str.length){
        return true
    }
    else{
        return false
    }
}

console.log(isogram('hey'))