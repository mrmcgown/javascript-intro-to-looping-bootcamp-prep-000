function forLoop(array) {
for (var i = 0; i < 25; i++) {
  if(i === 1) {
    console.log("I am ${i} strange loop.");
} else {
  console.log("I am ${i} strange loops.");
}
}}

function whileLoop(n) {
  let countdown = n;
  while (countdown > 0) {
    console.log(--countdown)
  }
  return "done"
}

function doWhileLoop(array) {
  
}