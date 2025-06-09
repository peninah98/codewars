const refactoredFunc = async =>{
    try {
         setTimeout(() => {
      const data = "Data fetched successfully!";
      callback(null, data);
    }, 1000);
    } catch (error) {
        if (error) console.error("Error:", error);
      console.log(data);    
    }
}