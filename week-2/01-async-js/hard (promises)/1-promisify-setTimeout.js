/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve(`Promise resolved after ${n} n`);
        }, n * 1000); // Convert seconds to milliseconds
      });
}

const delayTime = 3; // Set the desired delay time in seconds

wait(delayTime)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

module.exports = wait;

