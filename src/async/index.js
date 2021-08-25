const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        true
            ? setTimeout(() => {
                resolve("after");
            }, 4000)
            : reject(new Error("ops!"));
    });
};

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
};

console.log("before");
doSomething().finally(() => {
    console.log("end");
});
