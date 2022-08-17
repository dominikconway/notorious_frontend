import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react';
import Container from 'react-bootstrap/Container';


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
    navigate(`/notes/${id}`)
  }

  const removeNote = () => {
    deleteNote(id)
    navigate('/notes')
}

  return (
    <div className="note-show-div">
      <form className='update-note-form' onSubmit={handleSubmit}>
        <div className='hstack gap-3'>
        <input className='form-control me-auto'
          type="text"
          value={editForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
          required
        />
        <input className='form-control me-auto'
          type="text"
          value={editForm.memo}
          name="memo"
          placeholder="memo"
          onChange={handleChange}
          required
        />
        <input className='form-control me-auto'
          type="date"
          value={editForm.date}
          name="date"
          placeholder="date"
          onChange={handleChange}
        />
        <input type="submit" class="btn btn-success" value= "Update Note" />
        {<button type='button' className='btn btn-outline-danger' id='delete' onClick={removeNote}>DELETE Note</button>}
        </div>
      </form>
        <div className='note-title-bg'>
          <h1 className='note-title'>{note.title}</h1>
          <div className='date-div-show'>{note.date.slice(0,10)}</div>
        </div>
        <div className='note-memo'>
          <h2>{note.memo}</h2>
        </div>
        
      
    </div>
  )
}

export default Show