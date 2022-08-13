import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav className="nav">
          <Link to="/">
            <div>Notorious Notes</div>
          </Link>
        </nav>
      )
}

export default Header