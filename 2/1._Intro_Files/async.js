// Javascript is single threaded
// everything operates on the main thread

// Node has the event loop

// a Promise is syntactic sugar for callbacks

// why use callbacks? examples of async code: 
// requests over the internet
// reading files
// databases

// we aim to write non-blocking code so we need asynchronous behavior in the above examples
// Promise can be in different states
// pending
// fulfilled (resolved)
// rejected
/* new Promise((resolve, reject) => {
    try {
        setTimeout(() => {
            resolve("Everything went well");
        }, 4000);
    } catch {
        reject("Something went wrong");
    }
}).then(message => console.log(message))
.catch(message => console.log(message)); */

// create a function called myPromise that returns a promise which fulfills after 5 seconds
function myPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I kept my promise");
        }, 5000);
    });
}

// async/await is syntactic sugar for Promises
const arrowFunction = async () => {
    /* myPromise().then(message => {
        console.log(message);
    }); */
    const message = await myPromise();
    console.log(message);
}

arrowFunction();

