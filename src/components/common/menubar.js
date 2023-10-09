import React, { useEffect, useState } from 'react'
import { Container, Image, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { config } from '../../helpers/config'
import { FiHome, FiAperture, FiCalendar, FiAward, FiHeadphones } from "react-icons/fi"
const Menubar = () => {
  const [mode, setMode] = useState("white");
  const handleScroll = () => { 
    const scrollYPosition = window.scrollY;
    if(scrollYPosition > 250){
      setMode("dark");
    }
    else{
      setMode("white")
    }
   }
   useEffect(() => {
     window.addEventListener("scroll", handleScroll);
   
     return () => {
      window.removeEventListener("scroll", handleScroll);
     }
   }, [])
   
  
  return (
    <Navbar expand="lg" className={`menubar bg-${mode}`} sticky="top" data-bs-theme={mode}>
          <Container>
            <Navbar.Brand href="#" title={config.project.name}>
                <Image src={`/images/logo/${mode==="white" ? "logo" : "logo-white"}.png`} className="img-fluid" alt={config.project.name}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`}/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                    <Image src="/images/logo/logo.png" className="img-fluid" alt={config.project.name}/>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link href="#action1"><FiHome/> Home</Nav.Link>
                  <Nav.Link href="#action2"><FiAperture/> Courses</Nav.Link>
                  <Nav.Link href="#action3"><FiCalendar/> Events</Nav.Link>
                  <Nav.Link href="#action4"><FiAward/> About</Nav.Link>
                  <Nav.Link href="#action5"><FiHeadphones/> Contact</Nav.Link>
                </Nav>
                <a href={`tel:${config.contact.phone1}`} className="btn btn-outline-primary"><FiHeadphones/> CALL NOW</a>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
  )
}
export default Menubar