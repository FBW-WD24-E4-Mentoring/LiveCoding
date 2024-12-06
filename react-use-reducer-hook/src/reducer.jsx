
export const initialState= {
  counter:0, 
  showContent:true
}

export const reducer=(state,action)=>{
/*   switch(action.type){
    case "increment":
      return {...state, counter:state.counter+action.payload}
    case "decrement":
      return {...state, counter:state.counter-action.payload}
    case "reset":
      return {...state, counter:0}
    case "toggle":
      return {...state, showContent:!state.showContent}
  } */

      if(action.type==="increment"){
         return {...state, counter:state.counter+action.payload}
      }else if(action.type==="decrement"){
            return {...state, counter:state.counter-action.payload}
      }else if(action.type==="reset"){
             return {...state, counter:0}
      }else if(action.type==="toggle"){
         return {...state, showContent:!state.showContent}
      }else{
        return state
      }
  // increment counter

  // decrement counter 

  // reset counter 

  // toggle content
}
