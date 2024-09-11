import React from 'react'

const CreateToDo: React.FC = (): JSX.Element => {
  return (
    <div>
        <input type='text' placeholder='Title'></input> <br />
        <input type='text' placeholder='Description'></input> <br />
        <input type='date' placeholder='Target Date'></input> <br />
        <button>Add Todo</button>
    </div>
  )
}

export default CreateToDo
