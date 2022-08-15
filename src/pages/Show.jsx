import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react';

function Show({notes, updateNotes, deleteNote}) {

  const { id } = useParams();
  const note = notes.find((note) => note._id === id)
  let navigate = useNavigate()

  const removeNote = () => {
    deleteNote(id)
    navigate('/notes')
}

  return (
    <div className="note">
      <h1>{note.title}</h1>
      <h2>{note.memo}</h2>
      {<button type='button' className='btn btn-danger' id='delete' onClick={removeNote}>delete</button>}
    </div>
  )
}

export default Show