import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import auth from "./firebaseConfig"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider,signInWithPopup,GithubAuthProvider } from 'firebase/auth'
import GoogleButton from 'react-google-button'


function App() {


  const provider = new GoogleAuthProvider() 
 const githubProvider = new GithubAuthProvider()
  const [user,setUser] =useState(null)
  useEffect(()=>{
    onAuthStateChanged(auth,(credentials=>{
      setUser(credentials)
      console.log(credentials)
    }))
  },[])


  const registerFirebase=async (e)=>{
    e.preventDefault()
    try{
       await createUserWithEmailAndPassword(auth, e.target.email.value, e.target.password.value )
       console.log(auth.currentUser)
    }
    catch(err){
      console.log(err)
    }
   
  }

  const loginFirebase=async(e)=>{
    e.preventDefault()
    try{
      const user = await signInWithEmailAndPassword(auth, e.target.email.value, e.target.password.value)
      console.log(auth.currentUser)
     /*  if(user){
        navigate("/profile")
      } */

    }
    catch(err){
      console.log(err)
    }

  }

  const signoutFirebase=()=>{
    auth.signOut()
  }


  const loginGoogleFirebase=async ()=>{
    try{
      const result = await signInWithPopup(auth,provider)
      console.log(result.user)
    }
    catch(err){
      console.log(err)
    }
    
  }


  const loginGithubFirebase=async()=>{
    try{
      const result = await signInWithPopup(auth,githubProvider)
      console.log(result.user)
    }catch(err){
      console.log(err)
    }
  }
  return (
    <>
    <h1>Good Morning!, {user?.email}</h1>
      <h1>firebase authentication</h1>
      <form onSubmit= {registerFirebase}>
        <label htmlFor="email">Email : <input type="email" name="email" /></label><br />
        <label htmlFor="password">Password : <input type="password" name="password"/></label><br />
        <button>register</button>
      </form>

    <form onSubmit={loginFirebase}>
        <label htmlFor="email">Email : <input type="email" name="email"/></label><br />
        <label htmlFor="password">Password : <input type="password" name="password" /></label><br />
        <button>login</button>
      </form>
    <button onClick= {signoutFirebase}>signout</button>

    <GoogleButton onClick={loginGoogleFirebase}/>
    <button onClick={loginGithubFirebase}>login with github</button>
    </>
  )
}

export default App
