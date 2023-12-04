"use strict";
function findRoutes(routes) {
    const result = [];
    let previousRoute = [];
    routes.forEach((route) => {
        if (route[0] === previousRoute[previousRoute.length - 1]) {
            result.push(route[0]);
        }
        previousRoute = route;
    });
    return result.join(", ");
}
console.log("Result", findRoutes([["MNL", "TAG"], ["CEB", "TAC"], ["TAG", "CEB"], ["TAC", "BOR"],]));
