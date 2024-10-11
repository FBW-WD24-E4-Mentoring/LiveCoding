//async await syntax
// way to work with the promises in efficient way

// first get data from 1st server and then get the data from second server depending on the id you receiveed from 1st server.
/* 
fetch("url...")
  .then((res) => {
   return  res.json()
    })
  .then((result) => {
    console.log("user id");
    // sending request to our 2nd server
    fetch("second url ...")
      .then((res) => res.json())
      .then((userInfo) => {
        console.log(userInfo);
      
      });
  }).catch(err=>console.log(err))
 */

// synchronous way of working
/*   const user = createUser("Syed",23) */

/* async function main() {
  //write your asynchronous code in a synchronous way
  try {
    const res = await fetch("url1...");
    const userId = await res.json();
    const res2 = await fetch("url2 .. userid");
    const userInfo = await res2.json();
    console.log(userInfo);
    const respo = await fetch("");
  } catch (err) {
    console.log(err);
  }
}

main(); */

/* try{}
catch(err){

} */

// we are fecthing users id from server

async function fetchUserInfo() {
  try {
    // write asynchronous code in synchronous way
    const response = await fetch("https://reqres.in/api/users?page=2"); // fetch data
    const userData = await response.json(); // parsing json data
    const ids = userData.data.map((user) => user.id);
    // pick any random id of user and fetch more info about that
    // Math.floor(Math.random()*ids.length) // 0 - 5

    const randomUserId = ids[Math.floor(Math.random() * ids.length)];

    const response2 = await fetch(
      `https://reqres.in/api/users/${randomUserId}`
    ); // fetch data
    const userInfo = await response2.json(); // parse data
    console.log(userInfo);
  } catch (err) {
    console.log(err);
  }
}

/* fetchUserInfo(); */

// sessionStorage (depending on the session, 5mb )
// localStorage (permanent storage , 10mb)
// cookies (temperary, set expiry date, server uses cookies to store data, small in size 4kb)

/* localStorage */

/* localStorage.setItem() // store item into local storage */
/* localStorage.getItem() // read item from the local storage */
/* localStorage.removeItem() // delete a item from local storage */
/* localStorage.clear() // clean/delete everything from local storage */

const name = "Naqvi";

//localstorage can store string data only
/* const age = 45;

localStorage.setItem("data", age);

const data = localStorage.getItem("data");

console.log(typeof data); */

const numbers = [1, 2, 3, 4, 5];

//dont use this method
/* console.log(numbers.toString()); */

// strigify data // convert to json when you transfer data from one place to another

// go use JSON object
// JSON use in synchronous coding

/* const string = JSON.stringify(numbers);
console.log(string);
const originalArray = JSON.parse(string);
console.log(originalArray); */
/* localStorage.setItem("numbers", JSON.stringify(numbers));

const localdata = localStorage.getItem("numbers");
const parsedData = JSON.parse(localdata);
console.log(parsedData[0]); */

/* localStorage.removeItem("data"); */

//cleanup
/* localStorage.clear(); */

/* sessionStorage.setItem("name", "Naqvi");

console.log(sessionStorage.getItem("name")); */
/* sessionStorage.clear(); */

/* document.cookie = `name='Naqvi';expires=Fri, 31 Dec 9999 23:59:59 GMT;`; */

async function fetchData(e) {
  const localData = localStorage.getItem("users");
  if (localData === null) {
    const res = await fetch("https://reqres.in/api/users?page=2");
    const result = await res.json();
    console.log("fetching data from external server ....");
    console.log(result.data);
    localStorage.setItem("users", JSON.stringify(result.data));
  } else {
    console.log("your data is already cached in local storage ....");
    console.log(JSON.parse(localData));
  }
  /*  const localData = localStorage.getItem("users");
  if (localData) {
    e.target.disabled = true;
  } */
}

document.querySelector("button").addEventListener("click", fetchData);
