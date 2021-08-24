const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve("everything is ok");
    } else {
      reject("showing an error, worst practice");
    }
  });
};

// somethingWillHappen()
//   .then((response) => console.log(response))
//   .catch((err) => console.log(err));

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      setTimeout(() => {
        resolve("everything is still ok");
      }, 4000);
    } else {
      const err = new Error("showing an error, better practice ");
      reject(err);
    }
  });
};

// somethingWillHappen2()
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => console.log(err));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then((response) => {
    console.log("arrays responses: ", response);
  })
  .catch((err) => {
    console.error(err);
  });
