import { useEffect, useState } from "react";
import Center from "../Components/center";
import { Container, Table } from "react-bootstrap";


const GreenBeret = () => {

    const[greenBeret, setGreenBeret] = useState([])


    useEffect(()=>{
        fetch("http://localhost:8080/getGreenBerets")
        .then(res=>res.json())
        .then((result)=>{
            setGreenBeret(result);
        }
        )
    },[]
    )


    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);

    return (
        <>
        <Center>
        <Container>
            <Table striped bordered hover size="sm" responsive="sm">
                <thead>
                    <tr>
                        <th>50 Meter Gear Swim</th>
                        <th>Push-ups</th>
                        <th>Sit-ups</th>
                        <th>Pull-ups</th>
                        <th>2 Mile Run</th>
                        <th>5 Mile Ruck w/ 65 lbs</th>
                    </tr>
                </thead>
                <tbody>
                    {greenBeret.filter((val) => {
                            if(val.email.includes(userToken.user)) {
                                return val
                            }
                            
                        }).map((greenBeret) =>
                            <tr key = {greenBeret.email}>
                                <td>{greenBeret.swim} minutes</td>
                                <td>{greenBeret.pushUps}</td>
                                <td>{greenBeret.sitUps}</td>
                                <td>{greenBeret.pullUps}</td>
                                <td>{greenBeret.run} minutes</td>
                                <td>{greenBeret.ruck} minutes</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </Container>
        </Center>
        </>


    )




}//end GreenBeret

export default GreenBeret