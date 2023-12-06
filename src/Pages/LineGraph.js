import { useEffect, useState } from "react";
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import Center from "../Components/center";
import NavBar from "../Components/NavBar";



const LineGraph = () => {

    
    const[activities, setActivities] = useState([]);

    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);

    useEffect(()=>{
        fetch("http://localhost:8080/getActivitiesByEmail/"+ userToken.user)
        .then(res=>res.json())
        .then((result)=>{
            setActivities(result);
        }
        )

    },
    )
    

    

    


    return (
        <div style={{backgroundColor: '#282c34', height: '100%'}}>
            <NavBar/>
            <h1 style={{color:"aqua", position:"absolute", left:'38%'}}>Progress Chart</h1>
        <Center>
        <ResponsiveContainer width='50%' height={300}>
        <LineChart data= {activities}  >
            <Line type="monotone" dataKey="pushUps" stroke="aqua" strokeWidth={3} activeDot={{r:8}}/>"
            <Line type="monotone" dataKey="pullUps" stroke="red" strokeWidth={3} activeDot={{r:8}}/>
            <Line type="monotone" dataKey="sitUps" stroke="purple" strokeWidth={3} activeDot={{r:8}}/>"
            <Line type="monotone" dataKey="chinUps" stroke="green" strokeWidth={3} activeDot={{r:8}}/>"
            <CartesianGrid stroke="#ccc"/>
            <XAxis dataKey="entry_id"/>
            <YAxis type="number" domain={[0,100]} tickFormatter={10}/>
            <Tooltip/>
            <Legend/>
        </LineChart>
        </ResponsiveContainer>
        <ResponsiveContainer width='35%' height={300}>
        <LineChart  data= {activities} >
            <Line type="monotone" dataKey="run" stroke="lime" strokeWidth={3} activeDot={{r:8}}/>
            <Line type="monotone" dataKey="ruck" stroke="yellow" strokeWidth={3} activeDot={{r:8}}/>
            <CartesianGrid stroke="#ccc"/>
            <XAxis dataKey="entry_id"/>
            <YAxis type="category"/>
            <Tooltip/>
            <Legend/>
        </LineChart>
        </ResponsiveContainer>
        </Center>
        </div>
    )

}

export default LineGraph

/*
<ResponsiveContainer width='35%' height={300}>
        <LineChart  data= {activities} >
            <Line type="monotone" dataKey="run" stroke="lime" strokeWidth={3} activeDot={{r:8}}/>
            <Line type="monotone" dataKey="Ruck" stroke="yellow" strokeWidth={3} activeDot={{r:8}}/>
            <CartesianGrid stroke="#ccc"/>
            <XAxis dataKey="entry_id"/>
            <YAxis type="decimal" domain={[0, 40]} tickCount={2}/>
            <Tooltip/>
            <Legend/>
        </LineChart>
        </ResponsiveContainer>
        */