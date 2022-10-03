function log(message) {  //declaration function
  console.log(message); //method
}
var message = "hello world"; //input
log(message); //action

// variable declaration info, var -> for global/function, let -> for local bracket/block

function doSomething() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log("Finally: " + i);
}

doSomething();

let count;
count = "a";
log(count); //action
