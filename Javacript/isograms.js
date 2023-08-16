function isogram(str){
    let set = new Set(str.toLowerCase())
    let result = Array.from(set).join('')

    return result.length == str.length ? true : false
}

console.log(isogram('tree'))