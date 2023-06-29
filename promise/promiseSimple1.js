
function promiseAction(resolve, reject) {
  var a = 1 + 2;
  if (a == 2) {
    resolve("success");
  } else {
    reject("reject");
  }
}

function medicine1() {
  var promise = new Promise(promiseAction);
  return promise;
}

function successPromise() {
  console.log("promiseSuccess");
}

function errorPromise() {
  console.log("Promise errored");
}

medicine1().then(successPromise).catch(errorPromise);
