import { useEffect, useState } from "react"
import { Container, Table } from "react-bootstrap"
import Center from "./center"


const NavySeal = () => {

    const[navySeal, setNavySeal] = useState([])

    //const pftType = "getNavySeals"

    useEffect(()=>{
        fetch("http://localhost:8080/getNavySeals")
        .then(res=>res.json())
        .then((result)=>{
            setNavySeal(result);
        }
        )

    },[]
    )

    return (
        <>
        <Center>
        <Container>
            <Table striped bordered hover size="sm" responsive="sm">
                <thead>
                    <tr>
                        <th>500 yard Swim</th>
                        <th>Push-ups</th>
                        <th>Sit-ups</th>
                        <th>Pull-ups</th>
                        <th>1.5 Mile Run</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        navySeal.map(
                            navySeal =>
                            <tr key = {navySeal.id}>
                                <td>{navySeal.swim}</td>
                                <td>{navySeal.pushUps}</td>
                                <td>{navySeal.sitUps}</td>
                                <td>{navySeal.pullUps}</td>
                                <td>{navySeal.run}</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </Container>
        </Center>
        </>


    )



}//end NavySeal

export default NavySeal