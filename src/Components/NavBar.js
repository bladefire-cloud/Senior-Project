import { useEffect, useState } from 'react';
import { Button, Nav, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {

    const [userName, setUserName] = useState();

    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);

    useEffect(()=>{
        fetch("http://localhost:8080/getUserFirstName/"+ userToken.user, {method:"GET"})
        .then(res=>res.text())  //.then(res=>res.json())
        .then(res=>{
            setUserName(res);
        }
        )
    },[]
    )

    const [navigate, setNavigate] = useState();

    const logout =()=> {
        sessionStorage.clear();
        sessionStorage.removeItem("token");
        setNavigate({navigate:true});
        window.location.href="/";
    }

  return (
    <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand> PFT-Tracker</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-middle">
          <Navbar.Text>
            Signed in as: {userName}
          </Navbar.Text>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown" style={{color:'white', marginLeft:'5%'}}>
            <NavDropdown.Item href="/Activities" style={{color:'white'}}>Actvities</NavDropdown.Item>
            <NavDropdown.Item href="/LineGraph" style={{color:'white'}}>Line Graph</NavDropdown.Item>
            <NavDropdown.Divider/>
          <NavDropdown.Item href="/HomePage" style={{color:'white'}}>Home</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
        <Nav.Link href="#logout" onClick={logout}style={{color: 'white'}}><Button variant='dark'>Logout</Button></Nav.Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;