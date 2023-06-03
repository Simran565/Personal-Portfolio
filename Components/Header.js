import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style.css"

function Header() {
  return (
    <>
      <Navbar style={{margin: "10px 20px"}}>
        <Container>
          <Navbar.Brand href="#home"><img src="favicon_io (1)\android-chrome-512x512.png" alt="logo" height={60} width={60}/></Navbar.Brand>
          <Nav>
            <Nav> <a href="#About" className="a">About</a> </Nav>
            <Nav> <a href="#Skills" className="a"> Skills</a> </Nav>
            <Nav> <a href="#Project" className="a">Project</a> </Nav> 
            <Nav> <a href="#Contact" className="a">Contact Me</a> </Nav>
            <Nav.Link href="./cv.pdf" target={"_blank"}> <button>Resume</button> </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      
    </>
  );
}

export default Header;