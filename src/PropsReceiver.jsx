// import React from 'react'

// function PropsReceiver(props) {
//   return <>
//   <h2>Props Receiver</h2>
//   <p>{props.name}</p>
//   <p>{props.age}</p>
//   <p>{props.gender}</p>
//   </>
// }

// export default PropsReceiver

import React from 'react'

function PropsReceiver({name,age,gender}) {
  return <>
  <h2>{name}</h2>
  <p>{age}</p>
  <p>{gender}</p>
  </>
}

export default PropsReceiver