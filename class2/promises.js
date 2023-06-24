// # PROMISES

// ### File Operations
// Description: Implement a function that reads a file in UTF-8 encoding, applies the transform function on the file's contents, and then writes the transformed data to a new file.
// Example usage:
// ```js
// processFile('input.txt', 'output.txt', transform)
//   .then(() => console.log('File processing completed.'))
//   .catch(error => console.error('Error:', error));
// ```

// ## (https://betterprogramming.pub/10-javascript-promise-challenges-before-you-start-an-interview-c9af8d4144ec) PROBLEMS

// ### Promise Constructor 1
// What is the output of this code snippet? 
// ```js
// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
// })

// console.log('end');
// ```

// ### .then() and resolve()
// What is the output of this code snippet?
// ```js
// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
//   resolve(2)
//   console.log(3)
// })

// promise1.then(res => {
//   console.log(res)
// })

// console.log('end');
// ``` 

// ### resolve() not called
// What is the output of this code snippet?
// ```js
// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
// })

// promise1.then(res => {
//   console.log(2)
// })

// console.log('end');
// ```

// ### Confusing Code
// What is the output of this code snippet?
// ```js
// console.log('start')

// ... (87 lines left)