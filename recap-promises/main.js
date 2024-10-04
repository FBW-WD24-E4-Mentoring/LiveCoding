// synchronous/blocking and asynchronous/non-blocking code

/* console.log("Hello world"); */

// they run parrallel to each other
// they run independly
/* setTimeout(() => {
  console.log("after 2 second");
  
}, 2000);
setTimeout(() => {
  console.log("console from set time out");
}, 2000);
setTimeout(() => {
  console.log("last timeout");
}, 2000); */

/* console.log("Hi John");
for (let i = 0; i < 10e9; i++) {} */
/* for (let i = 0; i < 10e9; i++) {} // 20 seconds
for (let i = 0; i < 10e9; i++) {} // 20 seconds */

/* function main (){
    function inner(){


    }
} */

// promise (placeholder for your asynchronous code)
// promise allow you to control over your asynchronous code

// get data from first server
/* setTimeout(() => {
  //sending fetch request to server
  let data = "Hello world";
  setTimeout(() => {
    console.log(data);
  }, 2000);
}, 2000); */

/* setTimeout(() => {
  //using the data we fetched from first server ,we need to send to second server to store in the db
  console.log(data);
}, 2000);
 */

// promise (placeholder for your asynchronous code)
// promise allow you to control over your asynchronous code

const myPromise = new Promise((resolve, reject) => {
  // fetching data from server
  // if you received data
  let status = true;
  if (status) {
    /* resolve("hello world"); */
  } else {
    reject("error");
  }
});

/* myPromise.then((data) => console.log("hi")).catch((err) => console.log(err)); */
/* console.log("Water boiling .....");
  console.log("add and mix coffee ...");
    console.log("adding milk and mixed that ...."); */
// make a coffee

function boilWater(first, second) {
  setTimeout(() => {
    console.log("Water boiling .....");
    first(second);
  }, 2000);
}

function addCoffee(second) {
  setTimeout(() => {
    console.log("add and mix coffee ...");
    second();
  }, 1000);
}

function addMilk() {
  setTimeout(() => {
    console.log("adding milk and mixed that ....");
    console.log("enjoy your coffee!");
  }, 500);
}

//callback hell (instead use promises)
/* boilWater(addCoffee, addMilk); */
/* addCoffee();
addMilk(); */

// promise (placeholder for your asynchronous code)
// promise allow you to control over your asynchronous code
function boilWater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Water boiling .....");
      resolve();
    }, 2000);
  });
}

function addCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("add and mix coffee ...");
      resolve();
    }, 1000);
  });
}

function addMilk() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("adding milk and mixed that ....");
      console.log("enjoy your coffee!");
      resolve();
    }, 500);
  });
}

/* boilWater()
  .then(() => addCoffee())
  .then(() => addMilk());
 */

//promise has three state
// pending
// fulfilled
// rejected
//https://jsonplaceholder.typicode.com/
//https://reqres.in/
//https://dummyjson.com/docs/products

/* fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => data.json())
  .then((users) => console.log(users))
  .catch((err) => console.log(err)); */

/* console.log(__dirname); */
/* fetch(__dirname + "/text.txt").then((data) => console.log(data)); */

const promise = new Promise((resolve, reject) => {
  resolve("Hello world");
});

/* promise
  .then((data) => console.log(data))
  .catch((err) => console.log("error ", err)); */

/* promise.then(
  (ok) => {
    console.log(ok);
  },
  (err) => {
    console.log(err);
  }
); */

fetch("https://pokeapi.co/api/v2/pokemon")
  .then((response) => response.json())
  .then((data) => data.results.forEach((pokemon) => console.log(pokemon.name)));

/* const axios = require("axios");
axios("https://pokeapi.co/api/v2/pokemon").then((response) =>
  response.data.results.forEach((pokemon) => console.log(pokemon.name))
); */
