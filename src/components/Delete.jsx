import React from 'react'

const Delete = (props) => {

  //pass this into dashboard
const {deleteAuthor} = props

  return (
    <div>
      <button onClick={deleteAuthor}>Delete</button>


    </div>
  )
}

export default Delete;