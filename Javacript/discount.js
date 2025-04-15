const arr = [100,2000,345,545,676]
const calculateDiscount = (arr) =>{
    return arr.map((item) => Math.floor(item * (24/100)))
}

