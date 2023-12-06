import { useState } from 'react';
import { Button, Container, FormLabel, Image, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
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

const [goalShow, setGoalShow] = useState(false);

const handleGoalShow = () => {
  console.log("handleGoalShow");
  setGoalShow(true);
}

const handleGoalClose = () => {
  console.log("handleGoalClose");
  setGoalShow(false);
}

const[firstName, setFirstName]= useState('');

const[lastName, setLastName] = useState('');

const[shipDate, setShipDate] = useState(new Date());

const[email, setEmail] = useState('');

const[password, setPassword] = useState('');

const [pft, setPft] = useState('');

const [swim, setSwim] = useState('');

const [pushUps, setPushUps] = useState('');

const [sitUps, setSitUps] = useState('');

const [pullUps, setPullUps] = useState('');

const [chinUps, setChinUps] = useState('');

const [run, setRun] = useState('');

const [ruck, setRuck] = useState('');

const handleGoalsSubmit=()=>{
  const goals={email, swim, pushUps, sitUps, pullUps, chinUps, run, ruck} 
  console.log(goals)
  fetch("http://localhost:8080/goal", {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(goals)
  }).then((res)=>{
  console.log("New goals added")
  window.location.href="/"
  })
}

const handleSubmit=()=>{
  const user={firstName,lastName,shipDate,email,password, pft} 
  console.log(user)
  fetch("http://localhost:8080/addUser", {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(user)
  }).then((res)=>{
  console.log("New user added")
  //window.location.href="/"
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
      window.location.href="/HomePage";
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
        <Form.Control type="email" placeholder="name@example.com"  value={email} onChange={(e)=> {setEmail(e.target.value)}} style={{marginTop:'5%'}}/>
      </Form.Label>
      <Form.Label controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} style={{marginBottom:'5%'}}/>
      </Form.Label>
      <h4>Select Ship Date</h4>
      {/* <FloatingLabel controlId="floatingInput" label={"Ship Date:"} className="mb-3">
          <Form.Control type="date" placeholder="Date"  name="shipDate" onChange={ (e) => onInputChange(e)} />
          </FloatingLabel> */}
      <DatePicker selected={shipDate} onChange={(date) => setShipDate(date)} dateFormat="yyyy-MM-dd"/> 
      <h4 style={{ marginTop: '5%', marginBottom: '5%' }}>Select Unit</h4>
      <OverlayTrigger key='bottom' placement='bottom' overlay={<Tooltip>Navy Seal</Tooltip>}>
      <Image src="seallogo.png" thumbnail style={{width:150, height:140, marginRight: '2%', marginBottom: '2%', marginLeft: '10%'}} onClick={(e)=>setPft("NavySeal")}/>
      </OverlayTrigger>
      <OverlayTrigger key='bottom' placement='bottom' overlay={<Tooltip>Specail Warfare Combat Crewman (SWCC)</Tooltip>}>
      <Image src="swcclogo.jpg" thumbnail style={{width:140, height:140, marginRight: '2%', marginBottom: '2%'}} onClick={(e)=>setPft("SWCC")}/>
      </OverlayTrigger>
      <OverlayTrigger key='bottom' placement='bottom' overlay={<Tooltip>Rescue Swimmer</Tooltip>}>
      <Image src="rescueswimmerlogo.png" thumbnail style={{width:140, height:140, marginRight: '2%', marginBottom: '2%'}} onClick={(e)=>setPft("RescueSwimmer")}/>
      </OverlayTrigger>
      <OverlayTrigger key='bottom' placement='bottom' overlay={<Tooltip>Army Ranger</Tooltip>}>
      <Image src="rangerlogo.png" thumbnail style={{width:140, height:140, marginRight: '2%', marginBottom: '2%'}} onClick={(e)=>setPft("Ranger")}/>
      </OverlayTrigger>
      <OverlayTrigger key='bottom' placement='bottom' overlay={<Tooltip>Green Beret</Tooltip>}>
      <Image src="greenberetlogo.png" thumbnail style={{width:140, height:140, marginRight: '2%', marginBottom: '2%', marginLeft: '10%'}} onClick={(e)=>setPft("GreenBeret")}/>
      </OverlayTrigger>
      <OverlayTrigger key='bottom' placement='bottom' overlay={<Tooltip>Marine Raider</Tooltip>}>
      <Image src="raiderlogo.png" thumbnail style={{width:140, height:140, marginRight: '2%', marginBottom: '2%'}} onClick={(e)=>setPft("Raider")}/>
      </OverlayTrigger>
      <OverlayTrigger key='bottom' placement='bottom' overlay={<Tooltip>Marine Recon</Tooltip>}>
      <Image src="reconlogo.jpg" thumbnail style={{width:140, height:140, marginRight: '2%', marginBottom: '2%'}} onClick={(e)=>setPft("Recon")}/>
      </OverlayTrigger>
      <OverlayTrigger key='bottom' placement='bottom' overlay={<Tooltip>Marine Forces Special Operations Command (MARSOC)</Tooltip>}>
      <Image src="marsoclogo.png" thumbnail style={{width:140, height:140, marginRight: '2%', marginBottom: '2%'}} onClick={(e)=>setPft("MARSOC")}/>
      </OverlayTrigger>
      <OverlayTrigger key='bottom' placement='bottom' overlay={<Tooltip>Pararescue Specialist (PJ)</Tooltip>}>
      <Image src="pjlogo.png" thumbnail style={{width:140, height:140, marginRight: '2%', marginBottom: '2%', marginLeft: '20%'}} onClick={(e)=>setPft("PJ")}/>
      </OverlayTrigger>
      <OverlayTrigger key='bottom' placement='bottom' overlay={<Tooltip>Tactical Air Control Party Specialist (TACP)</Tooltip>}>
      <Image src="tacplogo.png" thumbnail style={{width:140, height:140, marginRight: '2%', marginBottom: '2%'}} onClick={(e)=>setPft("TACP")}/>
      </OverlayTrigger>
      <OverlayTrigger key='bottom' placement='bottom' overlay={<Tooltip>Combat Controller Specialist (CCT)</Tooltip>}>
      <Image src="cctlogo.png" thumbnail style={{width:140, height:140, marginRight: '2%', marginBottom: '2%'}} onClick={(e)=>setPft("CCT")}/>
      </OverlayTrigger>
      </Modal.Body>
      <Modal.Footer>
        <Button variant = "outline-info" onClick = {() => {handleSubmit(); handleClose(); handleGoalShow();}}>Submit</Button>
      </Modal.Footer>
      </Modal>

      <Modal 
      show={goalShow} 
      onHide = {handleGoalClose}
      backdrop="static"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Goals
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>User Info</h4>
        <FloatingLabel controlId="floatingInput" 
          label= "Swim: " className="mb-3" >
          <Form.Control type="text" placeholder="swim" name="swim" value={swim} onChange={(e)=>setSwim(e.target.value)} 
           />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Push Ups:" className="mb-3"   >
          <Form.Control type="Push Ups" placeholder="Push Ups"  name="pushUps" value={pushUps} onChange={(e)=>setPushUps(e.target.value)}
          />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Sit Ups:" className="mb-3">
          <Form.Control type="text" placeholder="Sit Ups" name="sitUps" value={sitUps} onChange={(e)=>setSitUps(e.target.value)} 
          />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Pull Ups:" className="mb-3" >
          <Form.Control type="text" placeholder="Pull Ups" name="pullUps" value={pullUps} onChange={(e)=>setPullUps(e.target.value)}
          />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Chin Ups:"className="mb-3">
          <Form.Control type="text" placeholder="Chin Ups"  name="chinUps" value={chinUps} onChange={(e)=>setChinUps(e.target.value)} 
          />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Run:"className="mb-3"  >
          <Form.Control type="text" placeholder="Run" name="run" value={run} onChange={(e)=>setRun(e.target.value)}
          />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Ruck:" className="mb-3"  >
          <Form.Control type="text" placeholder="Ruck" name="ruck" value={ruck} onChange={(e)=>setRuck(e.target.value)}
          />
          </FloatingLabel>
          </Modal.Body>
          <Modal.Footer>
          <Button variant='outline-secondary' onClick={handleGoalsSubmit}>Save Changes</Button>
      </Modal.Footer>
      </Modal>

      </>
  );
}

export default LoginForm;