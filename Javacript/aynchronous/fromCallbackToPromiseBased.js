function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Data fetched successfully!";
      resolve(data);
    }, 1000);
  });
}
  
  fetchData((error, data) => {
    if (error) {
      console.error("Error:", error);
    } else {
      console.log(data);
    }
  });





