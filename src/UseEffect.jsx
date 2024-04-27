import React, { useEffect, useState } from 'react'

function UseEffect() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);

/* 
Syntax: 
useEffect(()=>{
    1. The code that we want to run - Your Logic
    3. (Optional) Return Function or Cleanup function
}, []); 2. Dependancy Array
*/
// 1. No dependency - 1. run at first time when the app will mount 2. every re-render - that means any changes happened in the component it will render.

// useEffect(()=>{
//     console.log("No Dependency useEffect");
// });
//  same for no dependency array 
// console.log("Iam from Outside of the function"); --calls every re-render 

// 2. Empty dependency array - runs at first time only when the app will mount
// useEffect(()=>{
//   console.log("Empty dependency array")
// }, []);

// 3. State Dependency array - 1. runs at first time. 2. Changes happend int the state which mention inxide dependency array.

// useEffect(()=>{
// console.log("State Dependency Array");
// }, [count]);


// ===> Cleanup function
// -- 1. No dependency cleanup
// useEffect(()=>{
//   console.log("No dependency");
//   return ()=>console.log("No cleanup")
// }); 

// --2. Empty Dependency clenaup
// useEffect(()=>{
//   console.log("Empty dependency");
//   return ()=>console.log("Empty Cleanup");
// },[])

// --3. State Cleanup

// useEffect(()=>{
//   console.log("State Dependency");
//   return ()=> console.log("State Cleanup");
// }, [time])

// useEffect(()=>{
//   const random = Math.floor(Math.random() * 1000);

//   const timer = setInterval(()=>{
//     console.log(`${random} - Re-render`);
//   },1000);

//   return () => clearInterval(timer);
// })

  return <>
     <h2>useEffect Hook</h2>
     <h3>Count : {count}</h3>
     <h3>Time : {time}</h3>
     <button onClick={()=>setCount((value)=> value + 2)}>Count Button </button>
     &nbsp; &nbsp;
     <button onClick={()=>setTime((value)=> value + 1)}> Time Button </button>

  </>
}

export default UseEffect