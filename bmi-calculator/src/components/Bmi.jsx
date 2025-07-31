import React, { useContext } from 'react'
import bmiContext from '../assets/context/bmiContext'

const Bmi = () => {

    const {formData, category} = useContext(bmiContext)

  return (
    <div className='bmi-cal'>
        <p>Body Mass Index - <strong>{formData}</strong></p>
        <p className='cat'>{category}</p>
    </div>
  )
}

export default Bmi