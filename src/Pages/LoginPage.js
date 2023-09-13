import LoginForm from "../Components/LoginForm";

const LoginPage = ({setToken}) => {
        
    return (
        // Listing contents in table format:
        <div style={{backgroundColor: 'darkOrange', height: '100vh'}}>
            <LoginForm setToken={setToken}/>
        </div>
    )
}

export default LoginPage;