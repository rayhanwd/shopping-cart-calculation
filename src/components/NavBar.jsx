import React from 'react';
import { Container,Navbar,Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">CAKE SHOP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-uppercase">
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="">Product</Nav.Link>
            <Nav.Link href="">About</Nav.Link>
            <Nav.Link href="">Contact</Nav.Link>
            <Nav.Link href="">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;