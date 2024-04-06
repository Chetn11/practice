import logo from './logo.svg';
import './App.css';
import Test from './components/Test';
import Dynamic from './components2/Dynamic.jsx';
import { useState } from 'react';
import Data from './components/Data';
import Ref from './components/Ref';
import Reducer from './components/Reducer';
import Memo from './components/Memo';
import Dynamic2 from './components/Dynamic2';
import Reduce2 from './components/Reduce2';
import Get from './components/Get';
import FetachData from './components2/FetachData';



function App() {
  
  return (
    <div className="App">
     {/* <Test/> */}
     {/* <Dynamic/> */}
     {/* <Data/>
     <Ref/>
     <Reducer/> */}
     {/* <Memo/> */}
     {/* <Dynamic2/> */}
     {/* <Reduce2/> */}
     {/* <Get/> */}
     <FetachData/>
     <Dynamic/>
    </div>
  );
}

export default App;
