import { Link } from 'react-router-dom'
import { useState } from 'react'
import Spinner from 'react-bootstrap/Spinner';

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
        <div key={note._id} className='row row-cols-2 row-cols-md-1'>
          <div className='row row-cols'>
            <div className='card'>
          <Link className='link' to={`/notes/${note._id}`}>
            <h1>{note.title}</h1>
          </Link>
          <h3>{note.memo}</h3>
          <h3>{note.date}</h3>
            </div>
          </div>
        </div>
        
      ))
    }
  
    const loading = () => {
      return (
        <Spinner animiation='border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      )
    }
    
  
    return (
      <section>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newForm.title}
            name="title"
            placeholder="title"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            value={newForm.memo}
            name="memo"
            placeholder="memo"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            value={newForm.date}
            name="date"
            placeholder="date"
            required
            onChange={handleChange}
          />
          <input type="submit" value="Create Note" />
        </form>
        {notes ? loaded() : loading()}
      </section>
    )
  }
  
  export default Index