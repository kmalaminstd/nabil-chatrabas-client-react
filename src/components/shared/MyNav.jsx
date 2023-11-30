import { Container, Nav, Navbar } from "react-bootstrap"
import { IoMdHome, IoIosPeople } from "react-icons/io"
import { MdEventAvailable } from "react-icons/md"
import { FaWpforms } from "react-icons/fa"
import { Link } from "react-router-dom"


function MyNav() {
  return (
    <>
       <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#">নাবিল ছাত্রাবাস</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto my-2 my-lg-0"
                
                navbarScroll
              >
                <Nav.Link as={Link} to="/" className="d-flex align-items-center gap-2"><IoMdHome /> Home</Nav.Link>
                <Nav.Link as={Link} to="" className="d-flex align-items-center gap-2"> <IoIosPeople />Borders</Nav.Link>
                <Nav.Link as={Link} to="events" className="d-flex align-items-center gap-2"><MdEventAvailable /> Event</Nav.Link>
                <Nav.Link as={Link} to="apply-for-seat" className="d-flex align-items-center gap-2"><FaWpforms /> Apply</Nav.Link>
              </Nav>
             
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
  )
}

export default MyNav