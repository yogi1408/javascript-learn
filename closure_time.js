// function x() {
//   var i = 1;
//   setTimeout(function () {
//     console.log(i);
//   }, 3000);
//   console.log("Namaste Javascript");
// }
// x();

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i); // var has global scope, so it print last value of i means 6
//     }, i * 1000);
//   }
//   console.log("Namaste Javascript");
// }
// x();

//For fixing above problem, we need to use IIFE

function x() {
  for (var i = 0; i <= 5; i++) {
    setTimeout((function(j){           
        return function(){
            console.log(j);
        }
    })(i), i*1000);
  }
}
x();
