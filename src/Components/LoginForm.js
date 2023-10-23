import { useState } from 'react';
import { Button, Container, FormLabel, Image, Modal } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Center from './center';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


<div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }}></div>


function LoginForm({setToken}) {

const [show, setShow] = useState(false);

const handleShow = () => {
  console.log("handleShow");
  setShow(true);
}

const handleClose = () => {
  console.log("close");
  setShow(false);
}

const[firstName, setFirstName]= useState('');

const[lastName, setLastName] = useState('');

const[shipDate, setShipDate] = useState(new Date());

const[email, setEmail] = useState('');

const[password, setPassword] = useState('');

const [pft, setPft] = useState('');


/*
const[manager, setManager] = useState(false);
const handleChange = () => {

  setManager(!manager);
};

*/

const handleSubmit=(e)=>{
  e.preventDefault()
  const user={firstName,lastName,shipDate,email,password, pft} //manager
  console.log(user)
  fetch("http://localhost:8080/addUser", {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(user)
  }).then((res)=>{
  console.log("New user added")
  window.location.href="/"
  })
}

const [login, setLogin] = useState({
  email:'',
  password:''

})

const onInputChange = (e) => {
  console.log(e);
  setLogin({
      ...login,[e.target.name]: e.target.value
  });
}

const handleLogin = (e) => {
  e.preventDefault();
  
  console.log("Login ");
  fetch('http://localhost:8080/login', {
 
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Accept': 'application/json' },
    body: JSON.stringify(login),
    credentials : 'same-origin',
    }).then((res) => {
      console.log(res)     
      return res.json(); 
    }).then((res) =>{
      console.log(res);
      setToken(res);
      window.location.href="/StatisticsPage";
    });
}

    

  return (
    <>
    <Center>
    <Container style={{width: '50%',backgroundColor: 'white', padding: '5%', borderRadius: '10px'}}>
      <FormLabel style={{fontSize: '23px', marginBottom: "8%"}}>Tactical Fitness Tracker</FormLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" 
        onChange={ (e) => onInputChange(e)}
        name="email"/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password"
        onChange={ (e) => onInputChange(e)}
        name="password"/>
      </FloatingLabel>
      <Button variant = "outline-info" style={{marginTop: '5%', marginRight: '5%'}} onClick={handleLogin}>Login</Button>
      <Button variant="outline-info" style={{marginTop: '5%'}} onClick = {handleShow}>Create Account</Button>
      </Container>
      </Center>
      

      <Modal 
      show={show} 
      onHide = {handleClose}
      backdrop="static"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          New User
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>User Info</h4>
        <Form.Label controlId = "floatingName" label="Name" >
          <Form.Control type ="text" placeholder="First Name" style={{marginBottom: '5%'}} value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
          </Form.Label>
          <Form.Label controlId = "floatingName" label="Last Name" >
          <Form.Control type ="text" placeholder="Last Name" style={{marginBottom: '5%'}} value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
          </Form.Label>
        <Form.Label
        controlId="floatingInput"
        label="Email address"
        className="mb-3">
        <Form.Control type="email" placeholder="name@example.com"  value={email} onChange={(e)=>setEmail(e.target.value)} style={{marginTop:'5%'}}/>
      </Form.Label>
      <Form.Label controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} style={{marginBottom:'5%'}}/>
      </Form.Label>
      <h4>Select Ship Date</h4>
      <DatePicker selected={shipDate} onChange={(date) => setShipDate(date)}/>
      <h4 style={{ marginTop: '5%', marginBottom: '5%' }}>Select Unit</h4>
      <Image src="seallogo.png" thumbnail style={{width:150, height:140, marginRight: '2%', marginBottom: '2%', marginLeft: '10%'}} onClick={(e)=>setPft("NavySeal")}/>
      <Image src="swcclogo.jpg" thumbnail style={{width:140, height:140, marginRight: '2%', marginBottom: '2%'}} onClick={(e)=>setPft("SWCC")}/>
      <Image src="rescueswimmerlogo.png" thumbnail style={{width:140, height:140, marginRight: '2%', marginBottom: '2%'}} onClick={(e)=>setPft("RescueSwimmer")}/>
      <Image src="rangerlogo.png" thumbnail style={{width:140, height:140, marginRight: '2%', marginBottom: '2%'}} onClick={(e)=>setPft("Ranger")}/>
      <Image src="greenberetlogo.png" thumbnail style={{width:140, height:140, marginRight: '2%', marginBottom: '2%', marginLeft: '10%'}} onClick={(e)=>setPft("NavySeal")}/>
      <Image src="raiderlogo.png" thumbnail style={{width:140, height:140, marginRight: '2%', marginBottom: '2%'}} onClick={(e)=>setPft("NavySeal")}/>
      <Image src="reconlogo.jpg" thumbnail style={{width:140, height:140, marginRight: '2%', marginBottom: '2%'}} onClick={(e)=>setPft("NavySeal")}/>
      <Image src="marsoclogo.png" thumbnail style={{width:140, height:140, marginRight: '2%', marginBottom: '2%'}} onClick={(e)=>setPft("NavySeal")}/>
      <Image src="pjlogo.png" thumbnail style={{width:140, height:140, marginRight: '2%', marginBottom: '2%', marginLeft: '20%'}} onClick={(e)=>setPft("NavySeal")}/>
      <Image src="tacplogo.png" thumbnail style={{width:140, height:140, marginRight: '2%', marginBottom: '2%'}} onClick={(e)=>setPft("NavySeal")}/>
      <Image src="cctlogo.png" thumbnail style={{width:140, height:140, marginRight: '2%', marginBottom: '2%'}} onClick={(e)=>setPft("NavySeal")}/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant = "outline-info" onClick = {handleSubmit}>Submit</Button>
      </Modal.Footer>
      </Modal>

      </>
  );
}

export default LoginForm;