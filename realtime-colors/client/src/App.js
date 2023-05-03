import './App.css';
import Palatte from './components/Palatte';
import { init } from './socketApi';
import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <Palatte />
    </div>
  );
}

export default App;
