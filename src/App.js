import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [data, setData]= React.useState({name:"Rishabh", age:25});
  return (
    <div className="App">
      <input type="text"onChange={(e)=>{setData({...data,name:e.target.value})}}/>
      <input type="text"onChange={(e)=>{setData({...data,age:e.target.value})}}/>
      <h1>Name:{data.name}</h1>
      <h1>Age:{data.age}</h1>
    </div>
  );
}

export default App;
