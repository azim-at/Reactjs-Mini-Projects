import Login from './Login'
import Dashboard from './Dashboard'
import UserContext from '../assets/context/UserContext'
import { useState } from 'react'

const Home = () => {

    const [submitData, setSubmitData] = useState('');

    function isAuth() {
        if (submitData != null && submitData.userData) return true;
        else return false;
        }

    function logout() {
        setSubmitData(null);
    }

  return (
    <UserContext.Provider value={{submitData, setSubmitData, logout}}>
        <div className='home-page'>
            {
                isAuth() ? <Dashboard /> :  <Login />
            }
        </div>
   </UserContext.Provider>
  )
}

export default Home