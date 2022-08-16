import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

function Header() {
    return (
        <Navbar bg='primary' variant='dark'>
          <Container>
            <Link className='link' to="/">
              <Navbar.Brand>Notorious Notes</Navbar.Brand>
            </Link>
              <Nav className='justify-content-end'>
                <Nav.Link>
                  <Link className='link-img-bg' to='/notes'><img className='add-note-icon' src='https://i.imgur.com/6rov85m.png'></img></Link>
                </Nav.Link>
              </Nav>
          </Container>
        </Navbar>
      )
}

export default Header