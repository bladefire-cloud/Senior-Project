import { useEffect, useState } from 'react';
import { Button, FloatingLabel, Form, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ReactDatePicker from 'react-datepicker';

const NavBar = () => {

    

    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);

    // const [userName, setUserName] = useState();

    // useEffect(()=>{
    //     fetch("http://localhost:8080/getUserFirstName/"+ userToken.user, {method:"GET"})
    //     .then(res=>res.text())  //.then(res=>res.json())
    //     .then(res=>{
    //         setUserName(res);
    //     }
    //     )
    // },[]
    // )

    const [navigate, setNavigate] = useState();

    const logout =()=> {
        sessionStorage.clear();
        sessionStorage.removeItem("token");
        setNavigate({navigate:true});
        window.location.href="/";
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [info, setInfo] = useState([]);


  //   useEffect((e)=>{
  //     e.preventDefault();
  //     fetch("http://localhost:8080/getUsersByEmail/"+ userToken.user, {method:"GET"})
  //     .then(res=>res.json())
  //     .then((result)=>{
  //         setInfo(result);
  //     })
  // },[]);

  //const handleInfo=()=>{
  useEffect((e) => {
    fetch("http://localhost:8080/getUsersByEmail/" + userToken.user, {method:"GET"})
    .then(res=>res.json())
    .then((result)=>{
      setInfo(result);
    })
  })

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const currentDate = new Date();
    const leavingDate = new Date(info.shipDate);
    const totalSeconds = (leavingDate - currentDate) / 1000;

    setDays(formatTime(Math.floor(totalSeconds/3600/24)));
    setHours(Math.floor(totalSeconds / 3600) % 24);
    setMinutes(Math.floor(totalSeconds / 60) % 60);
    setSeconds(Math.floor(totalSeconds % 60));
    

  });

  function formatTime(time){
    return time < 10 ? '0' + {time} : time;
  }

  

  const [updateInfo, setUpdateInfo] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    shipDate: '',
    pft: ''
  });

  const onInputChange = (e) => {
    console.log(e);
    setUpdateInfo({
        ...updateInfo,[e.target.name]: e.target.value
    });
}

  const handleUpdate=(e)=>{
    e.preventDefault()
      console.log(updateInfo)
      fetch("http://localhost:8080/updateUser/"+ userToken.user, {
        method:'PUT',
        headers:{"Content-Type":"application/json", 'Accept': 'application/json'},
        body:JSON.stringify(updateInfo),
      })
      .then((result)=>{
      console.log("User Updated")
      window.location.href="/HomePage"
        })
  }
  
 
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand> PFT-Tracker</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-middle">
          <Navbar.Text>
            Signed in as: {userToken.user}
          </Navbar.Text>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown" style={{color:'white', marginLeft:'5%'}}>
            <NavDropdown.Item href="/Activities" style={{color:'white'}}>Actvities</NavDropdown.Item>
            <NavDropdown.Item href="/LineGraph" style={{color:'white'}}>Line Graph</NavDropdown.Item>
            <NavDropdown.Item href="/InfoPage">PFT Info</NavDropdown.Item>
            <NavDropdown.Divider/>
          <NavDropdown.Item href="/HomePage" style={{color:'white'}}>Home</NavDropdown.Item>
          <NavDropdown.Item href="" onClick= {handleShow} style={{color:'white'}}>Edit Personal Info</NavDropdown.Item>
          </NavDropdown>
          <Navbar.Text style={{position: 'relative', left:'5%'}}>
            Count Down: {days + " days"} {hours + " hours"} {minutes + " minutes"} {seconds + " seconds"}
          </Navbar.Text>
        </Navbar.Collapse>
          <Nav.Link href="#logout" onClick={logout}style={{color: 'white'}}><Button variant='dark'>Logout</Button></Nav.Link>
      </Container>
    </Navbar>
    

    <Offcanvas show={show} onHide={handleClose} placement='start' backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Edit Personal Information</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <FloatingLabel controlId="floatingInput" 
          label= {"Email: " + info.email} className="mb-3" >
          <Form.Control type="email" placeholder="name@example.com" name="email" onChange={ (e) => onInputChange(e)}  />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Password" className="mb-3"   >
          <Form.Control type="password" placeholder="Password" name="password" onChange={ (e) => onInputChange(e)}/>
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label={"First Name: " + info.firstName} className="mb-3">
          <Form.Control type="text" placeholder="First Name" name="firstName" onChange={ (e) => onInputChange(e)} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label={"Last Name: " + info.lastName} className="mb-3" >
          <Form.Control type="text" placeholder="Last Name" name="lastName" onChange={ (e) => onInputChange(e)}/>
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label={"Ship Date: " + info.shipDate} className="mb-3">
          <Form.Control type="date" placeholder="Date"  name="shipDate" onChange={ (e) => onInputChange(e)} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label={"PFT: " + info.pft} className="mb-3"  >
          <Form.Control type="text" placeholder="PFT" name="pft" onChange={ (e) => onInputChange(e)}/>
          </FloatingLabel>
          <Button variant='outline-secondary'onClick={handleUpdate} >Save Changes</Button>
        </Offcanvas.Body>
      </Offcanvas>

    </>
  );
}

export default NavBar;