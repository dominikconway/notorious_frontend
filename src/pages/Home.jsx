import { Link } from 'react-router-dom'

function Home() {
    return(
        <div class="jumbotron" id='home'>
        <h1 class="display-4">Welcome to NotoriouS NoteS</h1>
        <p class="lead">One-Stop-Shop for your Note(S) taking Needs.</p>

        <Link class="btn btn-primary btn-lg" to="/notes">Take me to my Notes</Link>
      </div>
    )
}

export default Home