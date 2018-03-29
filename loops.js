function forLoop(array) {
for (var i = 0; i < 25; i++) {
  if(array.length === 0) {
    console.log("I am ${i} strange loop.");
} else {
  console.log("I am ${i} strange loops.");
}
}}

function whileLoop(n) {
  let countdown = n;
  while (countdown > 0) {
    console.log(--countdown);
  }
  return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

function doWhileLoop(array) {
  do {
    array.length --;
    } 
  while (array.length > 0 && maybeTrue());
  return array;
}