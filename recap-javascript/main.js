/* String */

const myName = "Joseph";

myName.concat(" Smith");

console.log(myName);
/* console.log(myName.length);

console.log(myName.slice(0, 3));

console.log(myName.repeat(10)); */

/* console.log(myName[1]);

console.log(myName.toUpperCase());

console.log(myName.toLowerCase());

console.log(myName.indexOf("s")); */

/* const nullArray = Array(5).fill(null);
console.log(nullArray); */

/* performing crud operation on array */
const cities = ["Berlin", "Frankfurt", "Hamburg", "Leibzig"];

/* Creation */

/* add item in the end of your array */
/* cities.push("Bonn"); */

/* add in the start of your array */
/* cities.unshift("Bonn"); */

/* insert item on specific index/position */
/* cities.splice(2, 0, "Bonn", "Dusseldorf"); */ /* add multiple items */
/* cities.splice(2, 0, "Bonn"); */ /* add 1 item */

/* Read */

/* read any value from array using sqaure bracket notation */
/* const cities = ["Berlin", "Frankfurt", "Hamburg", "Leibzig"]; */
/* 
console.log(cities[0]);
console.log(cities[2]); */

/* traditional for loop */
/* for (let i = 0; i < cities.length; i++) {
  console.log(cities[i]);
} */

/* for of loop */
/* for (const city of cities) {
  console.log(city);
} */

/* using forEach method */
cities.forEach((item, index) => {
  console.log(item);
  console.log(index);
});

/* cities.forEach(console.log); */

/* Update */
/* const cities = ["Berlin", "Frankfurt", "Hamburg", "Leibzig"]; */

/* cities[0] = "Bonn";
cities[3] = "Berlin"; */

/* const deletedSingleItem = cities.splice(0, 1, "Bonn");
const deletedMultiItems = cities.splice(2, 2, "Berlin", "Islamabad");
console.log(deletedSingleItem);
console.log(deletedMultiItems);

console.log(cities); */

/* Delete */
/* const cities = ["Berlin", "Frankfurt", "Hamburg", "Leibzig"]; */

/* delete last item from array */
/* cities.pop(); */

/* delete from the start */
/* cities.shift(); */

/* delete item from a specific position */
/* cities.splice(1, 1);

console.log(cities); */

/* console.log(Array.isArray(cities));

cities.reverse(); */
