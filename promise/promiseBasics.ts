let promise = new Promise(promiseFunction(resolve, reject));

promise
  .then(successFn())
  .catch(errorFn());

function errorFn(): ((reason: any) => void | PromiseLike<void>) | null | undefined {
    return (message) => {
        console.log(message);
    };
}

function successFn(): ((value: unknown) => void | PromiseLike<void>) | null | undefined {
    return (message) => {
        console.log(message);
    };
}

function promiseFunction(): (resolve: (value: unknown) => void, reject: (reason?: any) => void) => void {
    return (resolve, reject) => {
        let a = 1 + 2;
        if (a == 2) {
            resolve("success");
        } else {
            reject("reject");
        }
    };
}

