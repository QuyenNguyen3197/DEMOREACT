import logo from './logo.svg';
import './App.css';
import Clock from './exam/Clock';
import  './exam/Clock/style.css'
import Sum from './exam/Sum';
import WorldClock from './exam/WorldClock';

import ContinuousSlider from './exam/Slider';
import CurrentConvert from './exam/CurrencyConverter';
import SimpleRandom from './exam/Simple-Random';




// const arr = [
//   {
//     tenThanhPho: 'Ha Noi',
//     muiGio: 7
//   },
//   {
//     tenThanhPho: 'Hong Kong',
//     muiGio: 8
//   },
//   {
//     tenThanhPho: 'New York',
//     muiGio: 15
//   },
//   {
//     tenThanhPho: 'Singapore',
//     muiGio: 6
//   },
//   {
//     tenThanhPho: 'Thai Lan',
//     muiGio: 7
//   }
// ]


function App() {
  return (
   
    <div className="App">
      {/* {/* <div>Clock()</div>
      <div>Sum()</div> */}

      {/* {arr.map(function(a, index){
        return(
          <WorldClock tenThanhPho = {a.tenThanhPho}  muiGio = {a.muiGio}/>
        )
      })} */}

      
      {/* <WorldClock tenThanhPho = {'Ha Noi'}  muiGio = {7}/>
      <WorldClock tenThanhPho = {'Hong Kong'}  muiGio = {8}/> */}
       {/* <ContinuousSlider/> */}
       <br/>
       {/* <CurrentConvert/> */}
       <SimpleRandom/>

    </div>
   
  );
}



export default App;
