import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react';

function Show({notes, updateNotes, deleteNote}) {

  const { id } = useParams();
  const note = notes.find((note) => note._id === id)
  let navigate = useNavigate()

  // state for form
  const [editForm, setEditForm] = useState(note)

  // handleChange function for form
  const handleChange = (event) => {
    setEditForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }

  // handlesubmit for form
  const handleSubmit = (event) => {
    event.preventDefault()
    updateNotes(editForm, note._id)
    // redirect people back to index
    navigate("/")
  }

  const removeNote = () => {
    deleteNote(id)
    navigate('/notes')
}

  return (
    <div className="note">
      <h1>{note.title}</h1>
      <h2>{note.memo}</h2>
      {<button type='button' className='btn btn-danger' id='delete' onClick={removeNote}>DELETE Note</button>}
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          value={editForm.memo}
          name="memo"
          placeholder="memo"
          onChange={handleChange}
          required
        />
        <input
          type="date"
          value={editForm.date}
          name="date"
          placeholder="date"
          onChange={handleChange}
          required
        />
        <input type="submit" value="Update Note" />
      </form>
    </div>
  )
}

export default Show