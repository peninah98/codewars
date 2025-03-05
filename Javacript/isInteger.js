
const isInterger = function(arr){
    if(!Array.isArray(arr))
    return arr.every(num =>Number.isInterger(num)) || arr.length === 0;
}

