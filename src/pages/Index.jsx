import { Link } from 'react-router-dom'

function Index(props) {
    // loaded function
    const loaded = () => {
      return props.notes.map((note) => (
        <div key={note._id} className="note">
          <Link to={`/note/${note._id}`}>
            <h1>{note.title}</h1>
          </Link>
          <h3>{note.memo}</h3>
        </div>
      ))
    }
  
    const loading = () => {
      return <h1>Loading...</h1>
    }
  
    return props.notes ? loaded() : loading()
  }
  
  export default Index