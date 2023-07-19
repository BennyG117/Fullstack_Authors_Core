import React from 'react'

const Delete = (props) => {

  //pass this into dashboard
const {deleteAuthor} = props

  return (
    <div>
      <button className='dashButton' onClick={deleteAuthor}>Delete</button>


    </div>
  )
}

export default Delete;