export const fakeBin = (x:string):string => {
    return x.split('').map((i)=> +i>=5?'1':'0').join("")
   };