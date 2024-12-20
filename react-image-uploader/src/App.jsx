import {  useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

function App() {
  const [image,setImage] = useState(null)
  const imgRef = useRef()

  const uploadImage=(e)=>{
    const formData = new FormData()
    formData.append("file", image)
    formData.append("upload_preset","h6kvscp9" )
    formData.append("folder","nature")

    fetch("https://api.cloudinary.com/v1_1/dzgbhcman/image/upload", {method:"POST",body : formData})
    .then(res=>res.json())
    .then(result=>{console.log(result)
      imgRef.current.src=result.secure_url
    })
  }
  return (
    <>
     <h1>React Image uploader</h1>
     <input type="file" onChange={e=>setImage(e.target.files[0])}/>
     <button onClick={uploadImage}>upload</button>
     <div>
      <img ref={imgRef}  src="" alt="" />
     </div>
    </>
  )
}

export default App
