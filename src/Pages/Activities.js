import { Container, Table } from "react-bootstrap";
import NavBar from "../Components/NavBar";
import Center from "../Components/center";
import { useEffect, useState } from "react";


const Activities = () => {

    const[activities, setActivities] = useState([])

    


    useEffect(()=>{
        fetch("http://localhost:8080/getActivities")
        .then(res=>res.json())
        .then((result)=>{
            setActivities(result);
        }
        )

    },[]
    )

    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);

    return (
        <div style={{backgroundColor: '#282c34', height: '100%'}}>
            <NavBar/>
        <Center>
        <Container>
            <Table striped bordered hover size="sm" responsive="sm">
                <thead>
                    <tr>
                        <th>Swim</th>
                        <th>Push-ups</th>
                        <th>Sit-ups</th>
                        <th>Pull-ups</th>
                        <th>Chin-ups</th>
                        <th>Run</th>
                        <th>Ruck</th>
                    </tr>
                </thead>
                <tbody>
                    {activities.filter((val) => {
                        if(val.email.includes(userToken.user)){
                            return val
                        }
                    }).map(
                            activities =>
                            <tr key = {activities.id}>
                                <td>{activities.swim}</td>
                                <td>{activities.pushUps}</td>
                                <td>{activities.sitUps}</td>
                                <td>{activities.pullUps}</td>
                                <td>{activities.chinUps}</td>
                                <td>{activities.run}
                                </td>
                                <td >{activities.ruck}</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </Container>
        </Center>
        </div>
    )

}//end const Activities

export default Activities