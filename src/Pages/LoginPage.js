import LoginForm from "../Components/LoginForm";

const LoginPage = ({setToken}) => {
        
    return (
        // Listing contents in table format:
        <div style={{backgroundColor: '#282c34', height: '100%'}}>
            <LoginForm setToken={setToken}/>
        </div>
    )
}

export default LoginPage;