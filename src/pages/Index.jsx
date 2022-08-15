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
          {/* <button type='button' className='btn btn-danger' id='delete' onClick>delete</button> */}
        </div>
        
      ))
    }
  
    const loading = () => {
      return <h1>Loading...</h1>
    }
  
    return (
      <section>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newForm.title}
            name="title"
            placeholder="title"
            onChange={handleChange}
          />
          <input
            type="text"
            value={newForm.memo}
            name="memo"
            placeholder="memo"
            onChange={handleChange}
          />
          <input
            type="text"
            value={newForm.date}
            name="date"
            placeholder="date"
            onChange={handleChange}
          />
          <input type="submit" value="Create Note" />
        </form>
        {notes ? loaded() : loading()}
      </section>
    )
  }
  
  export default Index