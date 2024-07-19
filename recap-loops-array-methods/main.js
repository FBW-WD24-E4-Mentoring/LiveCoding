// loops
// for loop
// while 

// for vs while
// break and continue

// for numeric loop
// while conditional loop

/* execute this line 10 times */
/* console.log("hello world") */

/* for(let i =0;i <10 ;i++){
    console.log("hello world")
} */

/* create an array with 5 unique random numbers between 1-10 */
/* let numbers = []

for(let i = 0; i< 5 ; i++){
    let randomNumber = Math.ceil(Math.random()*10) //7
    while(numbers.includes(randomNumber)){
        randomNumber = Math.ceil(Math.random()*10)
    }
    numbers.push(randomNumber)
}

console.log(numbers) */

/* only work in browser */
/*  const guessingNumber = Math.ceil(Math.random()*10) //2


let usernumber = +prompt("Enter your number ?")// 5
let i = 1 

 while(i< 3 && guessingNumber !==usernumber ){

    usernumber = +prompt("Enter your number ?")
    i++;
 }


 if(i === 3){
    alert("no more chances to win")
 }else{
    alert("You won this game")
 } */




/*  let numbers = [2,4,6,7,2,3,5,7,9,11,14,23]  */
 /* print number only if they are less then 10 */
/*  for(let i = 0 ; i < numbers.length ; i++){
    if(numbers[i]<10){
        console.log(numbers[i])
    }
}
 */



let nestedArray  = [ 
    ["Berlin","Bonn","Frankfurt"], // 1
    [2,3,4,5,6], //2
    ["a","b","c"] // 3

]  // [ 1 ,2 ,3 ]
/* traditional loop */
/* for(let i = 0 ; i< nestedArray.length; i++){
    console.log(nestedArray[i]) 
    for(let k = 0; k < nestedArray[i].length ; k ++){
        console.log( nestedArray[i][k])
    }
} */

for(let i = 0; i< 10 ; i++){
  

   /*  console.log(i)
    if(i*i===100){
        break;
    } */

    /* if(i !==5){
        console.log(i)
    } */
    /* skip */
    /* if(i===5){
       
        continue;
    }
    console.log(i) */
}




// foreach
// for in 
// for of







//ternary operator ?   // ternary expression condition ? true : false ;


//array methods
// push
// pop
// shift
// unshift
// join
// splice (replace)
// reverse
// slice


const cities = ["Berlin","Hamburg","Bonn","Frankfurt"]


cities.push("Leipzig")

cities.pop()

cities.unshift("leipzig")

cities.shift()
/* console.log(cities.join("-")) */
/* console.log(cities.reverse()) */

/* console.log(cities.slice(1,3)) */

/* "hello".replace("he","Ha") */ //Hallo"


/* cities.splice(2,1) */ // delete item from array

/* cities.splice(cities.indexOf("Hamburg"), 1) */

/* cities.splice(1, 0, "Lieig")  */ // add item into your array

/* let deletedItems = cities.splice(1,2, "Leipzig", "Dusseldorf")  */// replace any item / items in your array



/* console.log(cities)

console.log(deletedItems) */


//statements and expressions

//Expression : value or something which turns into a value
// true, 1 ,2+2 

/* condition ? true : false; */
/* 
const a = 23; */

/* const a = 23+2+5+10
console.log(1+1) */
let age = 17;

/* if(age>18){
    console.log("you are allowed to drive")
}else{
    console.log("you are under age")
} */

    console.log(age>18 ? "you are allowed to drive" : "you are under age")

        const theme = "dark"
   /*  let color;
        if(theme === "dark"){
             color = "black"
        }else{
            color = "white"
        } */


    
    const color = theme === "dark" ? "black" : "white";
