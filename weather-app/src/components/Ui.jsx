import React from 'react'
import { useContext } from 'react'
import userContext from '../assets/context/userContext'

const Ui = () => {

    const {city, setCity, handleSubmit, temp, clear, loading, displayCity, formattedDate} = useContext(userContext);

  return (
  <>
  {
    loading ? (<div className="d-flex justify-content-center align-items-center vh-100">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>) : 
    (<>
        <div className='text-center mt-4'>
            <h1>Weather App</h1>
        </div>
        <div className='container weather-div'>
        <form onSubmit={handleSubmit} className='form1 form-control'>
            <div className='mb-3 fw-bold'><p>{formattedDate}</p></div>
            <input type="text" className='form-control' placeholder='Enter city' onChange={(e) => setCity(e.target.value)} value={city}/> <br />
            <button className='btn btn-primary btn-sm m-1' type='submit'>Submit</button> 
            <button className='btn btn-secondary btn-sm m-1' onClick={clear}>Clear</button>
            <div className='mt-3'>
            <p className='text-capitalize'>{displayCity} Temperature: <br /> <span className='fw-bold'>{temp}&deg;C</span></p>
            </div>
       </form>
       
        </div>
    </>)  
  }

  </>
  )
}

export default Ui