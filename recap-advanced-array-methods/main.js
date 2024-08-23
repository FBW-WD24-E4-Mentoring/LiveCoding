/*Advanced Array Methods */

let students= [
    {
        id: 1,
        name: "Nikolas"
    },
    {
        id: 2,
        name: "John"
    },
    {
        id:3,
        name: "Max"
     },
   
]

const addStudent=(name)=>{
    let student = {
        id: students.length+1,
        name
    }
    students.push(student)
}


let grades= [
    {
        studentId: 2,
        grade:[75,60,95]
    },
    {
        studentId: 1,
        grade:[40,60,90]
    },
    {
        studentId: 3,
        grade:[70,50]
    },
   
]


const addGrade =(studentId, grade)=>{

    const foundStudentGrade = grades.find(item=>item.studentId === studentId )
    if(foundStudentGrade){
        foundStudentGrade.grade.push(grade)
         return "Grade added successfully!"
    }else{
       return "no such student exist!"
    }

   
}

/* console.log(addGrade(3,60))

console.log(addGrade(1,40))
console.log(addGrade(4,40))

console.log(grades) */


/* [60,70,50] */
const calculateAverage=(studentId)=>{
    const foundStudentGrade = grades.find(item=>item.studentId === studentId )
    if(foundStudentGrade){
        const sumOfAllGrades = foundStudentGrade.grade.reduce((acc, item)=>acc+=item,0)
        /* acc = acc+item */
        const averageGrades =  (sumOfAllGrades/foundStudentGrade.grade.length)
        return averageGrades

    }else{
         return "no such student exist!"
    }
}

/* console.log(calculateAverage(3)) */

// map => always returns you the same size of  new array back.
// filter => returns you new array with different size depending on the condition
// reduce => returns any type of data


/* let number = 5;  */

/* console.log(number += 2) */ /* increment assignment operator */
/* console.log(number) */

/* let number = 5; */

/* console.log(number++) */ /* post increment */
/* console.log(++number) */ /* pre increment */
/* console.log(number) */

const listStudentsWithAverageGrades =(arrayStudent)=>{
    const studentsWithGrades = arrayStudent.map(student=>{
        return {
            name: student.name, 
            averageGrade : calculateAverage(student.id) 
        }
    })

    return studentsWithGrades;
}

/* console.log(listStudentsWithAverageGrades(students)) */




/*  */



/* numbers.forEach(item=>{
    console.log(item*item)
})
 */


/* every and some */

/* console.log(numbers.every(item=> item>3)) */ // false


/* console.log(numbers.some(item=> item>6))  */// true


/* sort */
const numbers = [1,2,1,8,5]
numbers.sort((a,b)=>a-b) 
/* numbers.sort((a,b)=>{
    if(a>b){
         return 1
    }else{
        return -1
    }
}) */
console.log(numbers)


/* const studentsArray = [{name:"Naqvi",age:23},{name:"Ali",age:31},{name:"John",age:27}, {name:"Jamie", age:34}] */

/* console.log(studentsArray.sort((a,b)=>{
    if(a.name > b.name){
        return 1
    }else{
        return -1
    }
})) */
/* console.log(studentsArray.sort((a,b)=>a.age-b.age)) */ /* for numeric values */
/* console.log(studentsArray.sort((a,b)=>a.name>b.name?1:-1)) */ /* for numeric string */


/* findIndex */

const random = [1,2,3,4,5]
/* console.log(random.findIndex(item=>item===5)) *///2

const studentsArray = [
    {name:"Naqvi",age:23},
    {name:"Ali",age:31},
    {name:"John",age:27}, 
    {name:"Jamie", age:34},
    {name:"Ali",age:20},
]

console.log(studentsArray.findIndex(student=>student.name==="Ali"))

console.log(studentsArray.findLastIndex(student=>student.name==="Ali"))





