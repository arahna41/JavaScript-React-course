"use strict";

console.log("Get data...");

const req = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Wait...");

    const product = {
      name: "TV",
      price: "2000",
    };

    resolve(product);
  }, 2000);
});

req
  .then((product) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        product.status = "order";
        resolve(product);
        reject();
      }, 2000);
    });
  })
  .then((data) => {
    data.modify = true;
    return data;
  })
  .then((data) => {
    console.log(data);
  })
  .catch(() => {
    console.log("Error!");
  })
  .finally(() => {
    console.log("Finally.");
  });

//Promise.all();
//Promise.race();
const test = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), time);
  });
};
/* test(1000).then(() => console.log("1000ms"));
test(2000).then(() => console.log("2000ms")); */

Promise.all([
  test(1000),
  test(2000).then(() => {
    console.log("All");
  }),
]);

Promise.race([
  test(1000),
  test(2000).then(() => {
    console.log("Race");
  }),
]);
