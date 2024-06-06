import React, { useState } from 'react'
import './App.css'

export const BmiCalculator = () => {
    const [bmivalues,setBmivalues]=useState(
        {
            height:"",
            weight:"",
            bmiValue:"00",
            status:"--"
        }
    )

    const Value = (e)=>{
        setBmivalues({...bmivalues,[e.target.name]:e.target.value})
    }

    const bmiCalculator = () =>{

        let Weigth = bmivalues.weight
        let Height = bmivalues.height

        //converts meters
        Height/=100 
        const formula = ((Weigth)/(Height*Height)).toFixed(2)
        
        let Bmi_status=""

        if(formula<18.5){
            Bmi_status="Underweight"
        }
        else if(formula>=18.5 && formula<=24.9){
            Bmi_status="Healthy"
        }
        else if(formula>=25 && formula<=29.9){
            Bmi_status="Overweight" 
        }
        else if(formula>=30){
            Bmi_status="Obese"
        }

        setBmivalues({...bmivalues,bmiValue:formula, status:Bmi_status})
    }

    const ClearButton = () =>{
        setBmivalues({
            height:"",
            weight:"",
            bmiValue:"00",
            status:"Normal"
        })
    }

    return (
        <div className='container'>
            <div className="bmi-image">
                <img src="body-mass-index.avif" alt="bmi images" />
            </div>
            <div className="calculator">
                <h1>BMI Calculator</h1>
                <div>
                    <label htmlFor="height">Height (Cm) :</label>
                    <input type="text" id='height' name='height' value={bmivalues.height}  onChange={Value}/>
                    <label htmlFor="weight">Weight (Kg) :</label>
                    <input type="text" id='weight' name='weight' value={bmivalues.weight}  onChange={Value}/>
                    <div className="btns">
                        <button className='btn-1' onClick={bmiCalculator}>Calculate</button>
                        <button className='btn-2' onClick={ClearButton}>Clear</button>
                    </div>
                </div>
                <div className="result">
                    <p>Your BMI Value is : {bmivalues.bmiValue}</p>
                    <p>Status : {bmivalues.status}</p>
                </div>
            </div>
        </div>
  )
}
