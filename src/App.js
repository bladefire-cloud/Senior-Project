import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './Pages/LoginPage';
import { Routes,Route } from 'react-router-dom';




function setToken(userToken) {
  console.log("tokenTEst")
  console.log(userToken)
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}






function App() {

  
  const token = getToken();

  if(!token){

    return (
        <div className="App">
            <Routes>
                <Route path="/" exact={true} element={<LoginPage setToken={setToken}/>}/>
            </Routes>
        </div>
    );
}


  return (
    <div >
     <Routes>
      <Route path="/" exact={true} index element={<LoginPage setToken={setToken}/>}/>
     </Routes>
    </div>
  );
}

export default App;

/*
<Route path="/movietable" exact={true} element={<MovieTable/>}/> 
      <Route path="/searchmovie" exact={true} element= {<SearchPage/>}/>

*/