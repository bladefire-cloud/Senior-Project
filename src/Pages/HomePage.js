import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import Center from "../Components/center";
import NavBar from "../Components/NavBar";
import { useState } from "react";


const HomePage = () => {
        

  const[swim, setSwim] = useState('');

    const[pushUps, setPushUps] = useState('');

    const[sitUps, setSitUps] = useState('');

    const[pullUps, setPullUps] = useState('');

    const[chinUps, setChinUps] = useState('');

    const[run, setRun] = useState('');

    const[ruck, setRuck] = useState('');

    const handleSubmit=(e)=>{
        const activity={swim,pushUps,sitUps,pullUps,chinUps,run, ruck}
        fetch("http://localhost:8080/addActivity", {method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(activity)
        }).then((res)=>{
        window.location.href="/Activities"
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
                <Form.Control placeholder="Push Ups" style={{marginBottom: '5%'}} value={pushUps} onChange={(e)=>setSwim(e.target.value)}/>
                <Form.Control placeholder="Sit Ups" style={{marginBottom: '5%'}} value={sitUps} onChange={(e)=>setSwim(e.target.value)}/>
                <Form.Control placeholder="Pull Ups" style={{marginBottom: '5%'}} value={pullUps} onChange={(e)=>setSwim(e.target.value)}/>
                <Form.Control placeholder="Chin Ups" style={{marginBottom: '5%'}} value={chinUps} onChange={(e)=>setSwim(e.target.value)}/>
                <Form.Control placeholder="Run" style={{marginBottom: '5%'}} value={run} onChange={(e)=>setSwim(e.target.value)}/>
                <Form.Control placeholder="Ruck" style={{marginBottom: '5%'}} value={ruck} onChange={(e)=>setSwim(e.target.value)}/>
                <Button variant="outline-secondary">Submit</Button>
              </Col>
              <Col>
                <Form.Label style={{color: "white", textUnderlineOffset: '5px', marginBottom: '5%'}}><u>Goals:</u></Form.Label>
                <Form.Control disabled placeholder="Last name" />
              </Col>
            </Row>
          </Form>
          </Container>
          </Center>
        </div>
    )
}

export default HomePage;