import LoginForm from "../Components/LoginForm";

const StatisticsPage = ({setToken}) => {
        
    return (
        // Listing contents in table format:
        <div style={{backgroundColor: '#282c34', height: '100vh'}}>
            <LoginForm setToken={setToken}/>
        </div>
    )
}

export default StatisticsPage;