

function errorFn(message) {
    console.log(message);
}

function successFn(message) {
    console.log(message);
}

function promiseFunction(resolve, reject) {
  var a = 1 + 1;
  if (a == 2) {
    resolve("success");
  } else {
    reject("reject");
  }
}

let promise = new Promise(promiseFunction);

promise.then(successFn).catch(errorFn);