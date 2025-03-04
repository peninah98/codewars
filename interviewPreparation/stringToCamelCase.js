const toCamelCase = str =>{
    const splitedString = str.split(/[-_]/)
    return splitedString[0] + splitedString.slice(1).map(word=>word.charAt(0).toUpperCase()+ word.slice(1)).join("")
}

console.log(toCamelCase("the-stealth-warrior"))
console.log(toCamelCase("The_Stealth-Warrior"))