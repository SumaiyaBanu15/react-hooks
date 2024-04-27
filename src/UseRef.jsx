// import React, { useEffect, useRef, useState } from 'react'

// function UseRef() {

//     const [input, setInput] = useState("");
//     const count = useRef(1); 
//     // useRef returns Object {}, It have properties like Current etc..

//     useEffect(()=>{
//         count.current += 1;
//     })


//   return <>
//   <h2>useRef Hook</h2>
// <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />

// <p>The Input is : {input}</p>
// <p>The render count is {count.current} </p>

//   </>
// }

// export default UseRef


// import React, { useState } from 'react'
// import { useRef } from 'react';

// function UseRef() {

//     const [name, setName] = useState("");
//     const inputRef = useRef();

//   return <>
//   <h2>useRef Hook</h2>
//   <input ref={inputRef} value={name}
//   type='text' onChange={(e)=>setName(e.target.value)}
//   />
//   <p> My name is : {name}</p>
//   <button onClick={()=>inputRef.current.focus()}>Focus Input</button>
//   </> 

// }

// export default UseRef

// import React, { useEffect, useRef, useState } from 'react'

// function UseRef() {
//     const [name, setName] = useState("")
//     const inputRef = useRef("");

//     useEffect(()=>{
//         inputRef.current = name;
//     })

//     const display = ()=>{
//         console.log(inputRef.current);
//     }

//   return <>
//   <h2>useRef Hook</h2>
//   <input type='text' value={name}
//   onChange={(e)=> setName(e.target.value)} 
//   />
//   <p> My Name is : {name}</p>
//   <p> Previous Value is : {inputRef.current}</p>
//   <button onClick={display}>Display Input</button>
  
//   </>
// }

// export default UseRef

// ***** useRef in single component ****
// import React, { useEffect, useRef, useState } from 'react'

// function UseRef() {
//     const [name, setName] = useState("")
//     const inputRef = useRef("");
//     const focusRef = useRef();
//     const countRef = useRef(0);

//     useEffect(()=>{
//         inputRef.current = name;
//     })

//     const display = ()=>{
//         console.log(inputRef.current);
//     }

//     useEffect(()=>{
//         countRef.current += 1;
//     })

//   return <>
//   <h2>useRef Hook</h2>
//   <input type='text' value={name} ref={focusRef}
//   onChange={(e)=> setName(e.target.value)} 
//   />
//   <p> My Name is : {name}</p>
//   <p> Previous Value is : {inputRef.current}</p>
//   <p>Render count is : {countRef.current}</p>
//   <button onClick={display}>Display Input</button>
//   &nbsp;&nbsp;
//   <button onClick={() => {focusRef.current.focus()}}>Focus Input</button>

  
//   </>
// }

// export default UseRef

import React, { useEffect, useState, useRef } from 'react'

function UseRef() {
    const [name, setName] = useState("");
    const inputRef = useRef(0);
    const focusRef = useRef();
    const countRef = useRef('');

    useEffect(()=>{
       inputRef.current += 1;
    })

    useEffect(()=>{
        countRef.current = name;
    })

    const handleCount = ()=>{
        console.log(countRef.current);
    }
  return <>
  <h2>useRef Hook</h2>
  <input  ref={focusRef}
  type='text' value={name}
  onChange={(e)=>setName(e.target.value)}
  />
  <p>My name is: {name}</p>
  <p>Re-render count is : {inputRef.current}</p>
  <p> Previous Value: {countRef.current}</p>
  <button onClick={handleCount}>Count</button> &nbsp;
  <button onClick={()=>focusRef.current.focus()}>Focus Input</button>
  
  </>
}

export default UseRef