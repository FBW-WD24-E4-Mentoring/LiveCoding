/* String */

let myName = "Josephos";
/* create */
/* const updatedName = myName.concat(" Smith", ",Developer!"); */
/* const updatedName = myName + " Smith" + ",Developer!"; */

/* const updatedName = `${myName} Smith,Developer!`; */

/* console.log(updatedName); */

/* read */
/* console.log(myName[0]);
console.log(myName[myName.length - 1]); */

/* update */
/* const updated = myName.replace(/Jo/gi, "Te");
console.log(updated); */

/* delete */
/* console.log(myName.replace("os", "")); */
/* console.log(myName.replace(/os/g, "")); */
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
const cities = [
  "Berlin",
  "Frankfurt",
  "Hamburg",
  "Leibzig",
]; /* add multiple items */ /* add 1 item */

/* Creation */

/* add item in the end of your array */
/* cities.push("Bonn"); */

/* add in the start of your array */
/* cities.unshift("Bonn"); */

/* insert item on specific index/position */
/* cities.splice(2, 0, "Bonn", "Dusseldorf"); */
/* cities.splice(2, 0, "Bonn"); */

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
/* cities.forEach((item, index) => {
  console.log(item);
  console.log(index);
}); */

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

/* Object */

/* literal
ObjectConstructor
functional
constructor/class */

/*  literal */
const student = {
  name: "Leon",
  age: 23,
  printDetail() {
    console.log(this.name);
  },
};
console.log(student);
/* ObjectConstructor */
const student1 = new Object();
student1.name = "leon";
student1.age = 23;
student1.printDetail = function () {
  console.log(this.name);
};
console.log(student1);

/* functional */
function createObject(name, age) {
  return {
    name,
    age,
    printDetail() {
      console.log(this.name);
    },
  };
}

const student2 = createObject("Robin", 27);
console.log(student2);

/* Custom Constructor / factory function */
/* way before es6 --ecma2015 */
function MyCustomConstrcutor(name, age) {
  /*  create {} called this */
  this.name = name;
  this.age = age;
  /* return this */
}
/* method in my constructor */
MyCustomConstrcutor.prototype.printDetail = function () {
  console.log(this.name);
};

const student3 = new MyCustomConstrcutor(
  "Max",
  24
); /* => create {} called this */

/* es6 class format to create constructor */

/* class DCI {
  #privateProperty = "secretcode";
  constructor(name, duration) {
    this.name = name;
    this.duration = duration;
  }
  #privateMethod() {
    return this.#privateProperty;
  }
  showSecretKeyWithChanges() {
    return this.#privateMethod() + "123Abc34";
  }
  printDetail() {
    console.log(this.name);
  }
  static compareBoth(a, b) {
    if (a instanceof this === b instanceof this) {
      console.log("both instances are from the same class");
    } else {
      console.log("they belongs to different classes");
    }
  }
} */

/* const webDevCourse = new DCI("web dev", 12);

const marketingCourse = new DCI("marketing", 6); */
/* instances of DCI */

/* DCI.compareBoth(webDevCourse, marketingCourse); */

class DCIEmployee {
  #salary = null;
  constructor(name, course, salary) {
    this.name = name;
    this.course = course;
    this.#salary = salary;
  }
  static showSalary(instance) {
    console.log(instance.#salary);
  }
}

const employee1 = new DCIEmployee("Max", "web dev", 3000);
const employee2 = new DCIEmployee("John", "marketing", 4000);

DCIEmployee.showSalary(employee2);

let user = {
  name: "Rbin",
  age: 20,
};

/* reading */
/* console.log(user.name);
console.log(user.age); */

/* reading => destructuring */
/* const { name, age } = user;


/* reading all keys */
/* const keys = Object.keys(user);
console.log(keys);
const values = Object.values(user);
console.log(values);
const entries = Object.entries(user);
console.log(entries); */

for (const key in user) {
  console.log(key);
  console.log(user[key]); /* get value of that key */
}

console.log("age" in user);
console.log("address" in user);

/* for values */
console.log(Object.values(user).includes("Rbin"));

console.log(user.hasOwnProperty("name"));

/* console.log(name);
console.log(age);
 */
/* update */
/* const user = {
  name: "Robin",
  age: 20,
}; */

/* user.name = "Nikolas"
user.age=32; */

/* delete */
/* delete user.age;

console.log(user); */
