//Global Object
// console.log(global);

global.setTimeout(() => {
    console.log("In the timeout");
    clearInterval(int);
}, 9000);

const int = setInterval(() => {
    console.log("In the interval");
}, 1000);

console.log(__dirname);
console.log(__filename);