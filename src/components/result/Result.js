import React from 'react'
import "./Result.css"

function Result(props) {
  // console.log(props.bmi)
  return (
    <div className='result-container'>
      <table>
        <thead>
          <tr>
            <th>BMI</th>
            <th>Result</th>
          </tr>
          <tr>
            <td>{props.bmi}</td>
            <td>{props.category}</td>
          </tr>
        </thead>
      </table>
    </div>


  )
}

export default Result