import logo from './logo.svg';
import './App.css';
import Clock from './exam/Clock';
import  './exam/Clock/style.css'
import Sum from './exam/Sum';
import WorldClock from './exam/WorldClock';

function App() {
  return (
    <div className="App">
      {/* <div>Clock()</div>
      <div>Sum()</div> */}
      <WorldClock tenThanhPho = {'Ha Noi'}  muiGio = {7}/>
      <WorldClock tenThanhPho = {'Hong Kong'}  muiGio = {8}/>
    </div>
  );
}

export default App;
