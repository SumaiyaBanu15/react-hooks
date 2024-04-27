import React, { useState } from 'react'

function UseState() {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(()=>count + 1)
    }

  return <>
    <h2> useState Hook </h2> 
    <h2>Increament and Decrement Operation</h2>
    <button onClick={handleIncrement}>Increase</button>
    <h2>{count}</h2>
    {/* Inline Function */}
    {/* <button onClick={() => { setCount((value)=>value - 1)}}>Decrease</button> */}
    <button onClick={()=> {setCount((e) => e-1)}}>Decrement</button>
  </>
}

export default UseState