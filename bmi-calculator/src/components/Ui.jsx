import React, { useContext } from 'react'
import Bmi from './Bmi'
import bmiContext from '../assets/context/bmiContext'

const Ui = () => {

    const {wei, setWei, hei, setHei, handleSubmit, clearForm} = useContext(bmiContext);

  return (
    <div className='container'>
        <div className='form-container'>
            <h3 className='text-dark my-4'>BMI Calculator</h3>
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <input type="number" className="form-control"  placeholder="Weight (kg)" onChange={(e) => setWei(e.target.value)} value={wei} />
                    <div className="input-group-append">
                        <span className="input-group-text">.00</span>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input type="number" className="form-control" placeholder='Height (meters)' onChange={(e) => setHei(e.target.value)} value={hei}/>
                    <div className="input-group-append">
                        <span className="input-group-text">.00</span>
                    </div>
                </div>
                <div className='mt-4'>
                    <button type="submit" className="btn btn-success my-1 me-1">Submit</button>
                    <button type="button" className="btn btn-secondary my-1 ms-1" onClick={clearForm}>Clear</button>
                </div>
            </form>
            <Bmi />
        </div>
    </div>
  )
}

export default Ui