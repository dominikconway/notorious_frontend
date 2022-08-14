import { Link } from 'react-router-dom'

function Index(props) {
    // loaded function
    const loaded = () => {
      return props.notes.map((note) => (
        <div key={note._id} className='row row-cols-2 row-cols-md-1'>
          <div className='col mb-4'>
            <div className='card'>
          <Link className='link' to={`/note/${note._id}`}>
            <h1>{note.title}</h1>
          </Link>
          <h3>{note.memo}</h3>
          <h3>{note.date.slice(0,-14)}</h3>
            </div>
          </div>
        </div>
      ))
    }
  
    const loading = () => {
      return <h1>Loading...</h1>
    }
  
    return props.notes ? loaded() : loading()
  }
  
  export default Index