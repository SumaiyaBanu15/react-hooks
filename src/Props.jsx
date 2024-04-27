import React from 'react'
import PropsReceiver from './PropsReceiver'

function Props() {
    const user = {
        name: "sumi",
        age:"26",
        gender:"female"
    }
  return <>
  <h1>Props</h1>
  {/* <PropsReceiver 
  name={user.name}
  age={user.age}
  gender={user.gender}
  />
   */}
{/* or */}
{/* Spread */}
   <PropsReceiver
   {...user}
   />
  </>
}

export default Props