// function a(callback) {
//   return callback();
// }

// console.log(a(function() {
//   console.log(this);
//   console.log("-------------------");
//   console.log(global);
// }));


// let a = function(a, b) {
//   return a+b;
// }

let x = (y, z) => (y + z);
// let x = (y, z) => y + z;
console.log(x(2,3));