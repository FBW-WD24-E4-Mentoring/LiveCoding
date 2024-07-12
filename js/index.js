// node : runtime environment for javascript

// datatype

// Primitive datatypes
// string (textual data , characters within the single quote or double qoutations or backticks )
// number (numerical data)
// boolean (true and false)
// null (explicitly define empty value)
// undefined (valeu of the variable not defined , empty value)
/* 
console.log('hello 123 $%&') // single quotes

console.log("hello 123 $%&") // double quotes

console.log(' "nothing is impossible" ')

console.log('john\'s  family')

console.log(`"" '' hello text %$$%&// 
    next line
    second line
    `) //backticks */

//number type
/* console.log(123123 13414)*/
/* console.log(1.234) */



//boolean type
console.log(true)
console.log(false)





// variables (container/box which hold data)

// keywords

// let and const both cont redeclare

// declare (command to create a box/variable)
// let variable can be declare without initialization
// reassign value to let

// can't redeclare
// re - assignment 
let age ;     // age = undefined
console.log(age)
age = 23; // re-assignment = assignment operator 

// initialization
// const variable connot declare without initialization
// reassign not possible
const fname = "Naqvi" ;
/* fname="John" *//* can't reassign */
console.log(fname)

//object datatype



// null datatype

let userName = null; // expicitly assigning empty value to your variable


// operators
// arithematical operator + - / * % ++ -- ** '(perform mathimetical operations )
/* let a = 1
console.log(2+4)
console.log(3-1)
console.log(2**3) /// 2*2*2
console.log(a++) // 1 // post increment a  +1
console.log(a) // 2
console.log(++a) // 1+a    //3  pre increment  */
 
// conditional operators  > < >= <= == === != !==      (to perform comparison) result will always be in boolean(true/false)
/* 
console.log(2>1) // true
console.log(3>=3)  //true 
console.log(2<=4) // true
console.log(4<=1) // false

console.log(4 == '4') // true // loose comparison // not check datatype


console.log(4 === '4') // false strict comparison


console.log(2 != "2") // false 2==2 

console.log(2 !== "2") // true */


// 1>2     2<4

// logical operators &&(and) ||(or) !(not)  (comparing multiple conditions) result will always be boolean (true/false)

/* 0 * 1 = 0
0 && 1 => 0 */
/* console.log( 1 > 2 && 2 < 4) */  // => false


/* console.log(false && true) // 0 * 1  = 0 false
console.log(true && false ) // 1 * 0 = 0 false
console.log(true && true ) // 1 * 1 = 1  true
console.log(false && false ) // 0 * 0 = 0 false */



// || or just think about addition +

/* console.log(false || true  ) // 0 +1 = 1 true
console.log(true || false )// 1 +0 = 1 true
console.log(true || true) // 1 + 1 = 2 true
console.log(false || false) // 0 + 0 = 0 false */

/* 
console.log(true || false && true) */ // true && true => true 1+0 *1 => 1*1 = 1

let userage = 19;
let hasDrivinglincence = true

/* console.log(userage >18 && hasDrivinglincence) */ // true
// user can drive



/* let isMarried=true;

console.log(!isMarried) */

let lighttheme = true ;


// on use clicked change value to false
lighttheme = !lighttheme; 





// String Methods


// whenever you define any variable datatype , javascript will attach prototype object with your variable, that prototype object contains methods


let myage = 23; 

let myName = "John is living in berlin"

console.log(myName.charAt(0))

/* console.log(myName[0])

console.log(myName.length)

console.log(myName.toUpperCase())

// unicode to letters 
console.log(myName.toLocaleUpperCase())

"i\u0307".toLocaleUpperCase("lt-LT"); // I */


/* let myName = "John" */ // 0 1 2 3
/* let myName = "John is living in berlin" */
console.log(myName.slice(0,-6))

// just nlike slice but negative index will not work
console.log(myName.substring(0,18))



// "my, name, is,naqvi"
// find how many words you have in that sentence
console.log(myName.split(" ").length)


console.log(myName.includes("in"))


console.log(myName.indexOf("J"))









// Math Object 
 

// string operator + concat

console.log(16 + "hello") //  16hello

console.log(2+4 + "hi") // 6hi

console.log("hello " + "World") // hello world


// assignment operators = += -= *= /= ++ -- **
 
let a = 1; // assignment operator


a+=1   // a = a+1 

a++ // a = a+1


a+=1 //a = a-1



// string operators
// assignment operator



// object
// array
// data