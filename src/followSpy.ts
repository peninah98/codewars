//  function findRoutes(routes: string[][]): string {
//     const result = []
//     routes.map((route)=>{
//         if(route[0]=== route[1]{
//             return result.push(route[0])
//         })
//     })
    
  
// }

// console.log(findRoutes([["MNL", "TAG"],["CEB", "TAC"],["TAG", "CEB"],["TAC", "BOR"],]));



function findRoutes(routes: string[][]): string {
  const result:string[] = [];
  let previousRoute: string[] = [];

  routes.forEach((route) => {
    if (route[0] === previousRoute[previousRoute.length - 1]) {
      result.push(route[0]);
    }
    previousRoute = route;
  });

  return result.join(", ");
}


console.log("Result",findRoutes([["MNL", "TAG"],["CEB", "TAC"],["TAG", "CEB"],["TAC", "BOR"],]));
