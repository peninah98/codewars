export function minimumSteps(nums: number[], value: number) {
    const sortedArray = nums.sort((a,b)=>a-b)
    for(let i = 0,sum = 0 ; i<sortedArray.length; i++){
         sum +=sortedArray[i]
          if(sum >= value){
         return i
        }
    } 
   
   }