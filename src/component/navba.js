import React from 'react'
import {Navbar,Container,Nav,NavDropdown,Form,FormControl} from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
function Navba({setSearch,setSearchRate}) {
    const ratingChanged = (newRating) => {
        setSearchRate(newRating);
      };      
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange= {e=> setSearch(e.target.value)}
        />
      </Form>
      <ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#ffd700" />
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default Navba
