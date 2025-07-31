import React, { useContext, useState } from 'react'
import UserContext from '../assets/context/UserContext';

const Login = () => {
    const [userData, setUserData] = useState('');
    const [passData, setPassData] = useState('');

    const {setSubmitData,} = useContext(UserContext);

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitData({userData, passData});
        setUserData('')
        setPassData('')
    }

  return (
    <>
    <div>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="user" placeholder='Username' onChange={(e) => setUserData(e.target.value)} value={userData} required/> <br />
            <input type="password" placeholder='Password' onChange={(e) => setPassData(e.target.value)} value={passData}/> <br />
            <button>Login</button>
        </form>
    </div>
    </>
  )
}

export default Login