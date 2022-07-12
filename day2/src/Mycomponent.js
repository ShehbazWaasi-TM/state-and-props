import React, { useEffect, useState } from 'react'

const Mycomponent = () => {
    const [state,setstate] = useState("Welcome to Techmojo!")
    // useEffect(()=>{
    //     setstate
    // })
  return (
   <>
   <h1>{state}</h1>
   </>
  )
}

export default Mycomponent
