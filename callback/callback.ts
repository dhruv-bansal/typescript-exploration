
setTimeout(medicine1, 1000);

function medicine1() {
  console.log("medicine1 received");
  setTimeout(medicine2, 1000);
}

function medicine2() {
  console.log("medicine2 received");
}

// callback hell - in can be written as inner functions

setTimeout(function medicine1() {
    console.log("medicine1 received");
    setTimeout(function medicine2() {
      console.log("medicine2 received");
    }, 1000);
  }, 1000);



