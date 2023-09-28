export function mango(quantity: number, price: number): number{
    let remainder : number = Math.floor(quantity / 3)
    return (quantity - remainder)  * price
}