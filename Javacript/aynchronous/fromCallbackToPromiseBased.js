// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = "Data fetched successfully!";
//       resolve(data);
//     }, 1000);
//   });
// }
  
//   fetchData((error, data) => {
//     if (error) {
//       console.error("Error:", error);
//     } else {
//       console.log(data);
//     }
//   });


function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve("Data fetched successfully!");
      } else {
        reject(new Error("Failed to fetch data"));
      }
    }, 1000);
  });
}





