import logo from './logo bmi.webp';
import './App.css';
import Bmi from './components/bmi/Bmi';
// import Result from './components/result/Result';

function App() {
  return (
    <div className="App">
      <img src={logo} alt="" />
      <p>BMI Calculator</p>
      <div className='body-container'>
      <Bmi />
      </div>
    </div>
  );
}

export default App;
