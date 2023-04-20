
import { createContext, useEffect, useState } from "react";
import { Link, Outlet} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const NavBar = ()=> {

    return (

        <>
        
        <Navbar bg="dark" expand="lg" variant="dark">
          <Container fluid>
            <Navbar.Brand>Mars Weather App</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav 
                className="me-auto my-2 my-lg-0 "
                style={{ maxHeight: '100px' }}
                navbarScroll>
                <Nav.Link  as={Link} to="/home/">Home</Nav.Link>
                <Nav.Link as={Link} to="/login/">Log in</Nav.Link>
                <Nav.Link as={Link} to="/signup/">Sign Up</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
        // <div>
        //     <h1>NavBar</h1>
        //     <Link to={'/home/'}>Home</Link>
        //     <Link to={'/'}>Sign Up</Link>
        //     <Link to={'/login/'}>Log In</Link>
        // </div>
    )
}