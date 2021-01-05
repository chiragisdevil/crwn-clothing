const myPromise = new Promise((resolve, reject) => {
    if(true) {
        resolve("Success");
    } else {
        reject("Failure");
    }
});

myPromise.then((value) => value + "!!!").then((value)=>console.log(value)).catch((error) => console.log(error));