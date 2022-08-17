import { Link } from 'react-router-dom'
import { useState } from 'react'

function Index({createNotes, notes}) {

 

  const [newForm, setNewForm] = useState({
    title: '',
    memo: '',
    date: Date,
  })

  const handleChange = (event) => {
    setNewForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    createNotes(newForm)
    setNewForm({
      title: '',
      memo: '',
      date: Date,
    })
  }

  

    // loaded function
    const loaded = () => {
      return notes.map((note) => (
      <div className='notes-list'>
        <div key={note._id} className='row row-cols-2 row-cols-md-1'>
          <div className='row row-cols'>
            <div className='card'>
          <Link className='title-link' to={`/notes/${note._id}`}>
            <h1>{note.title}</h1>
            <div className='date-div'>{note.date.slice(0,10)}</div>
          </Link>
          <div className='notes-body'>
            
            <h3>{note.memo}</h3>
          </div>
            </div>
          </div>
        </div>
      </div>
      ))
    }
  
    const loading = () => {
      return (
        <div animiation='spinner-border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      )
    }
    
  
    return (
      <section className='add-note-form'>
        <form onSubmit={handleSubmit}>
          <div className='hstack gap-3'>
          <input className='form-control me-auto'
            type="text"
            value={newForm.title}
            name="title"
            placeholder="title"
            required
            onChange={handleChange}
          />
          <input className='form-control me-auto'
            type="text"
            value={newForm.memo}
            name="memo"
            placeholder="memo"
            required
            onChange={handleChange}
          />
          <input className='form-control me-auto'
            type="text"
            value={newForm.date}
            name="date"
            placeholder="date"
            required
            onChange={handleChange}
          />
          <input type="submit" class="btn btn-secondary" value="Create Note" />
          </div>
        </form>
        
        {notes ? loaded() : loading()}
      </section>
    )
  }
  
  export default Index