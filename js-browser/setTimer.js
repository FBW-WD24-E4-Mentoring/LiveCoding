/* setTimeout(() => {
  console.log("Hello World");
}, 1000); */
/* execute only 1 time after 1000ms */

/* setInterval(() => {
  console.log("Hello World");
}, 1000); */
/* keep executing after each second(1000ms) */

let counter = 0;
let interval;
interval = setInterval(() => {
  counter++;
  if (counter > 10) {
    clearInterval(interval);
  }
  console.log(counter);
}, 1000);
