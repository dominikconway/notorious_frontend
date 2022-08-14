import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

function Header() {
    return (
        <Navbar bg='dark' variant='dark'>
          <Container>
            <Link className='link' to="/">
              <Navbar.Brand>Notorious Notes</Navbar.Brand>
            </Link>
              <Nav className='justify-content-end'>
                <Nav.Link>
                  <Link className='link' to='/notes'>My Notes</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className='link' to='/notes/addnote'>Add a  Note</Link>
                </Nav.Link>
              </Nav>
          </Container>
        </Navbar>
      )
}

export default Header