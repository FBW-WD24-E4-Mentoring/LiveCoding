
import { useReducer } from "react"
import Content from "./Content"
import Counter from "./Counter"
import {initialState,reducer} from "./reducer"


function App() {
  const [state, dispatch]=useReducer(reducer, initialState)
  //dispatch is a function you use to interact ywith reducer function

  return (
    <>
    <Counter counter = {state.counter} dispatch={dispatch}/>
    <Content showContent={state.showContent} dispatch={dispatch}/>
    </>
  )
}
//useReducer hook is a place to hold all your states and all logics of your application
export default App
