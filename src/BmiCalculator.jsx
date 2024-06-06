import React from 'react'
import './App.css'
export const BmiCalculator = () => {
  return (
        <div className='container'>
            <div className="bmi-image">
                <img src="body-mass-index.avif" alt="" />
            </div>
            <div className="calculator">
                <h1>BMI Calculator</h1>
                <div>
                    <label htmlFor="height">Height (Cm):</label>
                    <input type="text" id='height' />
                    <label htmlFor="weight">Weight (Kg):</label>
                    <input type="text" id='weight' />
                    <div className="btns">
                        <button className='btn-1'>Calculate</button>
                        <button className='btn-2'>Clear</button>
                    </div>
                </div>
                <div className="result">
                    <p>Your BMI is : 30</p>
                    <p>Status : Over Weight</p>
                </div>
            </div>
        </div>
  )
}
