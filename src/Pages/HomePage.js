import { Button, Col, Container, FloatingLabel, Form, Offcanvas, Row } from "react-bootstrap";
import Center from "../Components/center";
import NavBar from "../Components/NavBar";
import { useEffect, useState } from "react";


const HomePage = () => {
        


  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);

  const [goal, setGoal]=useState([]);
    
    useEffect(()=>{
      fetch("http://localhost:8080/goal/"+ userToken.user, {method:"GET"})
      .then(res=>res.json())
      .then((result)=>{
          setGoal(result);
      })
  })

  /*
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:8080/goal/" + userToken.user)
      result.json().then(json => {
        setGoals(json)
      })
      fetchData();
  },[]);

  */

  const [pft, setPft] = useState();

    useEffect(()=>{
        fetch("http://localhost:8080/getUserPft/"+ userToken.user, {method:"GET"})
        .then(res=>res.text()) 
        .then(res=>{
            setPft(res);
        }
        )
    },
    )

  const email = userToken.user;

    const[swim, setSwim] = useState('');

    const[pushUps, setPushUps] = useState('');

    const[sitUps, setSitUps] = useState('');

    const[pullUps, setPullUps] = useState('');

    const[chinUps, setChinUps] = useState('');

    const[run, setRun] = useState('');

    const[ruck, setRuck] = useState('');

    const handleSubmit=(e)=>{
      e.preventDefault()
        const activity={email,pft,swim,pushUps,sitUps,pullUps,chinUps,run,ruck}
        fetch("http://localhost:8080/addActivity", {method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(activity)
        }).then((res)=>{
        window.location.href="/Activities"
        })
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [updateGoals, setUpdateGoals] = useState({
      swim: '',
      pushUps: '',
      sitUps: '',
      pullUps: '',
      chinUps: '',
      run: '',
      ruck:''
    });
  
    const onInputChange = (e) => {
      console.log(e);
      setUpdateGoals({
          ...updateGoals,[e.target.name]: e.target.value
      });
  }
  
    const handleUpdateGoals=(e)=>{
      e.preventDefault()
        console.log(updateGoals)
        fetch("http://localhost:8080/updateGoals/"+ userToken.user, {
          method:'PUT',
          headers:{"Content-Type":"application/json", 'Accept': 'application/json'},
          body:JSON.stringify(updateGoals),
        })
        .then((result)=>{
        console.log("Goals Updated")
        window.location.href="/HomePage"
          })
    }
    
  

    return (
        // Listing contents in table format:
        <div style={{backgroundColor: '#282c34', height: '100%'}}>
          <NavBar/>
          <Center>
          <Container>
          <Form>
            <Row>
              <Col>
                <Form.Label style={{color: "White", textUnderlineOffset: '5px', marginBottom: '5%'}}><u>Enter New Activity:</u></Form.Label>
                <Form.Control placeholder="Swim" style={{marginBottom: '5%'}} value={swim} onChange={(e)=>setSwim(e.target.value)}/>
                <Form.Control placeholder="Push Ups" style={{marginBottom: '5%'}} value={pushUps} onChange={(e)=>setPushUps(e.target.value)}/>
                <Form.Control placeholder="Sit Ups" style={{marginBottom: '5%'}} value={sitUps} onChange={(e)=>setSitUps(e.target.value)}/>
                <Form.Control placeholder="Pull Ups" style={{marginBottom: '5%'}} value={pullUps} onChange={(e)=>setPullUps(e.target.value)}/>
                <Form.Control placeholder="Chin Ups" style={{marginBottom: '5%'}} value={chinUps} onChange={(e)=>setChinUps(e.target.value)}/>
                <Form.Control placeholder="Run" style={{marginBottom: '5%'}} value={run} onChange={(e)=>setRun(e.target.value)}/>
                <Form.Control placeholder="Ruck" style={{marginBottom: '5%'}} value={ruck} onChange={(e)=>setRuck(e.target.value)}/>
                <Button variant="outline-secondary" onClick={handleSubmit}>Submit</Button>
              </Col>
              <Col>
                <Form.Label style={{color: "white", textUnderlineOffset: '5px', marginBottom: '5%'}}><u>Goals:</u></Form.Label>
                <Form.Control disabled readOnly placeholder={goal.swim} 
                style={{marginBottom: '5%'}}/>
                <Form.Control disabled placeholder={goal.pushUps} 
                style={{marginBottom: '5%'}}/>
                <Form.Control disabled placeholder={goal.sitUps} 
                style={{marginBottom: '5%'}}/>
                <Form.Control disabled placeholder={goal.pullUps} 
                style={{marginBottom: '5%'}}/>
                <Form.Control disabled placeholder={goal.chinUps} 
                style={{marginBottom: '5%'}}/>
                <Form.Control disabled placeholder={goal.run} 
                style={{marginBottom: '5%'}}/>
                <Form.Control disabled placeholder={goal.ruck} 
                style={{marginBottom: '5%'}}/>
                <Button variant="outline-secondary" onClick={handleShow}>Edit Goals</Button>
              </Col>
            </Row>
          </Form>
          </Container>
          </Center>

          <Offcanvas show={show} onHide={handleClose} placement='end' backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Edit Goals</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <FloatingLabel controlId="floatingInput" 
          label= {"Swim: " + goal.swim} className="mb-3" >
          <Form.Control type="text" placeholder="swim" name="swim" onChange={ (e) => onInputChange(e)} 
           />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label={"Push Ups: " + goal.pushUps} className="mb-3"   >
          <Form.Control type="Push Ups" placeholder={"Push Ups " + goal.pushUps}  name="pushUps" onChange={ (e) => onInputChange(e)}
          />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label={"Sit Ups: " + goal.sitUps} className="mb-3">
          <Form.Control type="text" placeholder="Sit Ups" name="sitUps" onChange={ (e) => onInputChange(e)} 
          />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label={"Pull Ups: " + goal.pullUps} className="mb-3" >
          <Form.Control type="text" placeholder="Pull Ups" name="pullUps" onChange={ (e) => onInputChange(e)}
          />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label={"Chin Ups: " + goal.chinUps} className="mb-3">
          <Form.Control type="text" placeholder="Chin Ups"  name="chinUps" onChange={ (e) => onInputChange(e)} 
          />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label={"Run: " + goal.run} className="mb-3"  >
          <Form.Control type="text" placeholder="Run" name="run" onChange={ (e) => onInputChange(e)}
          />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label={"Ruck: " + goal.ruck} className="mb-3"  >
          <Form.Control type="text" placeholder="Ruck" name="ruck" onChange={ (e) => onInputChange(e)}
          />
          </FloatingLabel>
          <Button variant='outline-secondary' onClick={handleUpdateGoals}>Save Changes</Button>
        </Offcanvas.Body>
      </Offcanvas>

        </div>
    )
}

export default HomePage;