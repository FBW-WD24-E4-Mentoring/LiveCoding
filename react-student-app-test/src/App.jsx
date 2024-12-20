
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'

function App() {
  const [students,setStudents]=useState([])

  useEffect(()=>{
    //fetching students from our backend server
    fetch("http://localhost:4000/student")
    .then(res=>res.json())
    .then(studentsData=>setStudents(studentsData))
  },[])

  const createStudent=(e)=>{
    e.preventDefault()
  /*   const formData = new FormData(e.target) */
    const studentData = {
      name: e.target.username.value,
      age: e.target.age.value, 
      city:e.target.city.value,
      country:e.target.country.value,
      course:e.target.course.value
    }
    fetch("http://localhost:4000/student",{
      method:"POST",
      body: JSON.stringify(studentData),
      headers:{"Content-Type":"application/json"}
    })
    .then(res=>res.json())
    .then(result=>{
      setStudents([result,,...students])
      /* e.target is your form */
      e.target.reset()
    })
    .catch(err=>console.log(err))
  }


  return (
    <>
      <h1>React Student App</h1>
      <form onSubmit={createStudent}>
        <label>Name: <input type="text" name="username" /></label><br />
        <label>Course: <input type="text" name="course" /></label><br />
        <label>Age: <input type="text" name="age" /></label><br />
        <label>City: <input type="text" name="city" /></label><br />
        <label>Country: <input type="text" name="country" /></label><br />
        <button>add student</button>

      </form>
      <div style={{display:"flex",flexWrap:"wrap"}}>
        {students.map(student=>(
          <div key={student._id} style={{borderRadius:"20px", boxShadow:"2px 5px 5px black", margin:"10px",padding:"20px"}}>
            <h2>Name: {student.name}</h2>
            <p>Course: {student.course}</p>
            <p>Age : {student.age}</p>
            <p>Adress: {student.address?.city} {student.address?.country}</p>
          </div>
        ))}
      </div>
        
    </>
  )
}

export default App