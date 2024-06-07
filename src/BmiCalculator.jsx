import React, { useState } from "react";
import "./App.css";

export const BmiCalculator = () => {
  const [bmivalues, setBmivalues] = useState({
    height: "",
    weight: "",
    bmiValue: "00",
    status: "--",
    formErrorMessage: false,
    resultVisible: false,
  });

  const Value = (e) => {
    setBmivalues({ ...bmivalues, [e.target.name]: e.target.value });
  };

  let Weight = bmivalues.weight;
  let Height = bmivalues.height;
  let isError = bmivalues.formErrorMessage;
  let Result = bmivalues.resultVisible;
  let Bmi_status = "--";
  let formula = 0;

  // formValidation
  const CalculateBmi = () => {
    if (Height != "" && Weight != "") {
      bmiCalculator();
      isError = false;
      Result = true;
    } else {
      isError = true;
      Result = false;
      setBmivalues({...bmivalues,formErrorMessage:isError})
    }
  };

  const bmiCalculator = () => {
    // console.log("bmi cal function ", Weight, Height)
    //converts meters
    Height /= 100;
    formula = (Weight / (Height * Height)).toFixed(2);
    if (formula < 18.5) {
      Bmi_status = "Underweight";
    } else if (formula >= 18.5 && formula <= 24.9) {
      Bmi_status = "Healthy";
    } else if (formula >= 25 && formula <= 29.9) {
      Bmi_status = "Overweight";
    } else if (formula >= 30) {
      Bmi_status = "Obese";
    }
    // console.log("formula and status",formula, Bmi_status)
    setBmivalues((bmivalues) => ({
      ...bmivalues,
      bmiValue: formula,
      status: Bmi_status,
      resultVisible: Result
    }));
    // console.log("setted",bmivalues.isError)
  };


  const ClearButton = () => {
    setBmivalues({
      height: "",
      weight: "",
      bmiValue: "00",
      status: "--",
      formErrorMessage: false,
      resultVisible: false,
    });
  };

  return (
    <div className="container">
      <div className="bmi-image">
        <img src="body-mass-index.avif" alt="bmi images"/>
      </div>
      <div className="calculator">
        <h1>BMI Calculator</h1>
        <div>
          {bmivalues.formErrorMessage && 
            <p className="formError">Please Kindly Enter all the Details</p>
          }
          <label htmlFor="height">Height (Cm) :</label>
          <input
            type="number"
            id="height"
            name="height"
            placeholder="Enter your height in cm"
            value={bmivalues.height}
            onChange={Value}
            
          />
          <label htmlFor="weight">Weight (Kg) :</label>
          <input
            type="number"
            id="weight"
            name="weight"
            placeholder="Enter your weight in kg"
            value={bmivalues.weight}
            onChange={Value}
          />
          <div className="btns">
            <button className="btn-1" onClick={CalculateBmi}>
              Calculate
            </button>
            <button className="btn-2" onClick={ClearButton}>
              Clear
            </button>
          </div>
        </div>
        {bmivalues.resultVisible && (
          <div className="result">
            <p className="error">Your BMI Value is : {bmivalues.bmiValue}</p>
            <p>Status : {bmivalues.status}</p>
          </div>
        )}
      </div>
    </div>
  );
};
