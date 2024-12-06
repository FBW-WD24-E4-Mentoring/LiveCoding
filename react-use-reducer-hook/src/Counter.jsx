
export default function Counter({counter,dispatch}) {
  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={()=>dispatch({type:"increment",payload:3})}>increment</button>
      <button onClick={()=>dispatch({type:"decrement",payload:3})}>decrement</button>
      <button onClick={()=>dispatch({type:"reset"})}>reset</button>
    </div>
  );
}
