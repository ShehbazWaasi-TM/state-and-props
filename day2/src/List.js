import React from 'react'

const List = (props) => {
  return (
    <>
    <p>{props.list.join(", ")}</p>
    </>
  )
}

export default List
