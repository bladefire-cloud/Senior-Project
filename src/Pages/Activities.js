import { Container, Form, Table } from "react-bootstrap";
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

    const [pftSelection, setPftSelection] = useState("nothing");

    return (
        <div style={{backgroundColor: '#282c34', height: '100%'}}>
            <NavBar/>
            <Form.Select  style={{position:'absolute', top:'20%',left:'35%',width:'250px'}} onChange={(e)=>setPftSelection(e.target.value)}>
                <option value={"nothing"}>
                    PST-Activites Selection
                </option>
                <option value={"NavySeal"}>
                    Navy Seal
                </option>
                <option value={"RescueSwimmer"}>
                    Rescue Swimmer
                </option>
                <option value={"Ranger"}>
                    Army Ranger
                </option>
                <option value={"GreenBeret"}>
                    Green Beret
                </option>
                <option value={"SWCC"}>
                    SWCC
                </option>
                <option value={"Raider"}>
                    Marine Raider
                </option>
                <option value={"Recon"}>
                    Marine Recon
                </option>
                <option value={"MARSOC"}>
                   Marine Forces Special Operations Command (MARSOC)
                </option>
                <option value={"PJ"}>
                    Pararescue Specialist (PJ)
                </option>
                <option value={"TACP"}>
                    Tactical Air Control Party Specialist (TACP)
                </option>
                <option value={"CCT"}>
                    Combat Controller Specialist (CCT)
                </option>
                
            </Form.Select>
        <Center>
        <Container>
            <Table striped bordered hover size="sm" responsive="sm">
                <thead>
                    <tr>
                        <th>Email</th>
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
                        if(val.email.includes(userToken.user) && pftSelection === "nothing"){
                            return val
                        }
                        else if(val.pft.includes(pftSelection)){
                            return val
                        }
                    }).map(
                            activities =>
                            <tr key = {activities.id}>
                                <td>{activities.email}</td>
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