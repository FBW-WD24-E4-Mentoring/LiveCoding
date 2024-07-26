// JS function
// block of code designed to perform specific task and will execute when someone will invoke/call that function
// reuseable 

// function parameters
// function arguments
// return statement
// function expression
// arrow function



/// function definition
/* function print()  {
console.log("hello")
console.log(Math.random())
} */


/* console.log("before function") */

/* print() */ // invokation - calling function

/* console.log("after function") */

  



function printName(name){
    /* paramters are just like a local variables */
    console.log(name)
}

/* printName("Naqvi") */ //Naqvi // arguments are the actual value pass to your function
/* printName("Joseph")
printName("Leon")
printName("Max") */


// write a function which takes list of numbers and print square of all those numbers.

/* function getSqaureNumbers(array){ // [2,3,5,6]
    for(let i = 0; i < array.length; i++){
        console.log(array[i] * array[i])
    }
}


getSqaureNumbers([2,4,5,7,9]) */

// write a function which takes list of numbers and print sum of all adjacent numbers.

/* function sumall(array){
    for(let i = 0; i < array.length-1 ; i++){
         console.log(array[i]+ array[i+1])
    }
}

sumall([1,2,3,4,5]) */



function sum (a,b){
    return a+b
}

let result = sum(2,3)

console.log(result)

function createRandomNumber(){
   return Math.ceil(Math.random()*10)
}


const randomNumberArray = []

randomNumberArray.push(createRandomNumber())
randomNumberArray.push(createRandomNumber())
randomNumberArray.push(createRandomNumber())
randomNumberArray.push(createRandomNumber())
randomNumberArray.push(createRandomNumber())
randomNumberArray.push(createRandomNumber())

console.log(randomNumberArray)


/* function print(){
    console.log("hello world")
}

print() */


//expression is any value or anything which turns into a value
//function expression

/* const printHelloWorld = function (){
    console.log("hello world")
}

printHelloWorld() */


// arrow function // es6 syntax to write function expression
const printHelloWorld =  ()=>console.log("hello world")



/* function createRandomNumber(){
    return Math.ceil(Math.random()*10)
 } */

    const generateRandomNumber =  () =>  Math.ceil(Math.random()*10)


    const printNames= name => console.log(name)

     
    const totalSum = (a,b) =>  a+b