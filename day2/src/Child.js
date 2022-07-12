import React from 'react'

const Child = (props) => {
    console.log(props)
  return (
    <>
    <h1>{props.name}</h1>
    </>
  )
}

export default Child;
