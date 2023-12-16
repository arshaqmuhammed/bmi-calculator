import React, { useState} from 'react'
import "./Bmi.css"
import Result from '../result/Result'
import { BrowserRouter as Router , Routes, Route, Link} from 'react-router-dom'



function Bmi() {
  const [weight, setWeight] = useState('')
  const [height, setheight] = useState('')
  const [bmi, setBmi] = useState('')
  const [result, setResult] = useState(false);
  const [category, setCategory] = useState('')

  const handleOnChangeWeight = (e) => {
    setWeight(e.target.value);
  };
  
  const handleOnChangeheight = (e) =>{
    setheight(e.target.value);
  };

  const calculateBmi = () => {
    const bmiValue = (weight / (height*height)).toFixed(2);
    setBmi(bmiValue);
    setWeight('')
    setheight('')
    setResult(true);

  if (bmiValue < 16.5) {
    setCategory('Severely Underweight')
  }
  else if(bmiValue >= 16.5 && bmiValue <18.5 ){
    setCategory('Underweight')
  }
  else if(bmiValue >= 18.5 && bmiValue <25 ){
    setCategory('Normal')
  }
  else if(bmiValue >= 25 && bmiValue <30 ){
    setCategory('Overweight')
  }
  else if(bmiValue >= 30 && bmiValue <35 ){
    setCategory('Obese Class I')
  }
  else if(bmiValue >= 35 && bmiValue <40 ){
    setCategory('Obese Class II')
  }
  else if(bmiValue >= 40 && bmiValue <45 ){
    setCategory('Severely Obese')
  }
  else if(bmiValue >= 45 && bmiValue <50 ){
    setCategory('Morbidly Obese')
  }
  else if(bmiValue >= 50 && bmiValue <55 ){
    setCategory('Super Obese')
  }
  else if(bmiValue >= 60  ){
    setCategory('Hyper Obese')
  }
};




  
  return (
    <div className='main-container'>
      <Router>
      <Routes>
          <Route path='/'  element={Bmi}></Route>
          <Route path='/result' element={Result}></Route>
        </Routes>
        <div className='container'>
        <form onSubmit={(e) => e.preventDefault()}>
        <label >Weight</label>
        <input type="text" placeholder='in kg' onChange={handleOnChangeWeight} /><br />
        <label htmlFor="">Height</label>
        <input type="text" placeholder='in mtr' onChange={handleOnChangeheight} /><br />
        <button onClick={calculateBmi} className='getBmi-btn' > <Link to="/Result">Get BMI</Link></button>
        </form>
        </div>
       {
        result ? <Result bmi={bmi} category={category} /> : <span></span>
       }
        
        </Router>
    </div>
  )
}


export default Bmi;