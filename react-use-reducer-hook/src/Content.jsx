

export default function Content({showContent,dispatch}) {
  return (
    <div>
      {showContent && <h2>Displaying some conditional data here ...</h2>}
      <button onClick={()=>dispatch({type:"toggle"})}>show/hide</button>
    </div>
  );
}
