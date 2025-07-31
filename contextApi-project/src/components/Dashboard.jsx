import React, { useContext } from 'react'
import UserContext from '../assets/context/UserContext';

const Dashboard = () => {

 const {submitData, logout} = useContext(UserContext);


  return (
    <div>
      <h1 className='welcome'>Welcome to Dashboard {submitData.userData}</h1>
      <p>This is just basic example to understand contextAPI working. Thank you for checking this out!</p>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Dashboard