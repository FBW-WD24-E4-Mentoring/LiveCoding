// Object
// object is a set of key value pairs.
// object is a place to store multiple variables 



/* let array = ["Naqvi",
"John",
"Robin"] */


/* let name1 = "Naqvi"
let name2 = "John"
let name3 = "Robin"


let students ={
    name1: "Naqvi",
    name2 :"John",
    name3:"Robin"
}
 */

//literal way 

const student = {
    name:"John",
    age:23,
    course:"fbw32",
    "32" : "anything",
    "user name" : "johnsmith32"
}

//dot notation
console.log(student.course) // fbw32
console.log(student["course"])// fbw32

//dot notation will not work
// sqaure bracket notation
console.log(student["32"])

console.log(student["user name"])

//when you have to access dynamic key



const key = "Hello"

// create object with one key and that should be "Hello" and value should be "World"   {Hello : "World"}

/* const obj = { [key] : "World"}  */
/*     console.log(obj) */

/* let name = "Naqvi"
console.log(`my name is ${name}`) */ // my name is Naqvi



// for in (non-iterable) Object
// for of (iterable) Array / String

// Iterables

// [1,2,3,4]
// string

let array = [1,2,3,4]

console.log(array[Symbol.iterator])
/* array[Symbol.iterator] = null; */

let string ="abc"
console.log(string[Symbol.iterator])


let user = {name:"Smith"}
console.log(user[Symbol.iterator]) //undefined

/* for(const key in array){
    console.log(key)
} */

 let car = {
    name:"BMW",
    model:2024,
    price:12000
 }


/* for(const key in car){
    console.log(key) // dynamic // getting key
    console.log(car[key]) // getting value
}
 */
/* let stud = {name:"Leon",age:23, 342 : "fbw32"}

console.log(student.name)
console.log(student["342"]) */

const keys = Object.keys(car) //=> ["name", "model", "price"]

for(let i = 0 ; i< keys.length ; i++){
    console.log(keys[i])
    console.log(car[keys[i]])
}

/* console.log(Object.entries(car)) */



let numbers = [3,5,8,11,32,45]
let cities = ["Berlin","Hamburg","Bonn"]

console.time("testing time for traditional loop")
for(let i = 0 ; i< numbers.length ; i++){
    console.log(numbers[i])
}
console.timeEnd("testing time for traditional loop")



console.time("for of loop")
for(const number of numbers){
    console.log(number)
}
console.timeEnd("for of loop")




//destructuring of an object and array



/* const [a,...b] = [1,2,3,4,5,6,7,8] */



const data = ["John",23, "Berlin", "Germany"]
// extracting out values from your array into each variable
const [name ,age, city ,country] = data

console.log(`Student name is ${name} ,and his age is ${age} ...... and he lives in ${city} `) 


/* console.log(data[0])
console.log(data[3])

console.log(`Student name is ${data[0]} ,and his age is ${data[1]} ...... and he lives in `) */


//destructure object

const course = {
    students: 200,
    name:"Web dev",
    startingDate: "01.01.2024",
    location:{
        street:1,
        city:"berlin"
    }
}
//rename that property
const {students, name:courseName, startingDate , location:{street, city:collegeCity} } = course



const myName = "Joseph"
const studentName = "Joseph"
const myAge = 23;
const isMarried = false

console.log(myName === studentName)  //=> ("Joseph" === "Joseph")

const randomNumbers = [1,2,3]
const otherNumbers = [1,2,3]

console.log(randomNumbers === otherNumbers) 
 //> (001 === 002) //=> false

/*  const copyNumbers = [...randomNumbers]; */

let studentObject =  {
    name:"Ion",
    age:23,
    address:{
        city:"berlin"
    }
}

let copyStudentObject = {...studentObject} // shallow clone

console.log(copyStudentObject)
console.log(studentObject)

copyStudentObject.name="Joseph"

console.log(copyStudentObject)
console.log(studentObject)




/* let labtop = {
    name:"Lenevo",
    model:{
        serialNumber:"12344",
        modelCode:"sdfaer34"
    }
}
let copyLabtop = labtop

console.log(copyLabtop === labtop) */


/* const m = [1,2,3]
const n = [...m] */

