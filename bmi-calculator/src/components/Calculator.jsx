import React, { useState } from 'react'
import Ui from './Ui'
import bmiContext from '../assets/context/bmiContext'

const Calculator = () => {

  const [wei, setWei] = useState('');
  const [hei, setHei] = useState('');
  const [formData, setFormData] = useState('')
  const [category, setCategory] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const bmi = wei / (hei * hei);
    setFormData(bmi.toFixed(2))
    if (bmi < 18.5) {
        setCategory("You are Underweight");
      } else if (bmi >= 18.5 && bmi <= 24.9) {
         setCategory("Your weight is Normal");
      } else if (bmi >= 25 && bmi <= 29.9) {
         setCategory("You are Overweight");
      } else if (bmi >= 30) {
        setCategory("You are Obese");
      } else {
         setCategory("Invalid BMI");
      }
  }

  function clearForm() {
    setWei('');
    setHei('')
    setFormData('')
    setCategory('')
  }


  return (
    <>
   <bmiContext.Provider value={{wei, setWei, hei, setHei, formData, setFormData, handleSubmit, category, clearForm}}>
      <Ui/>
   </bmiContext.Provider>
    </>
  )
}

export default Calculator