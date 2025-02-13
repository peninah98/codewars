function sortStringCaseSensitive(str){
    return str.split('').sort((a,b)=>b-a).join('');
}

console.log(sortStringCaseSensitive('Hello'))