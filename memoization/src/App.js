import './App.css';
import { useState ,useMemo} from 'react';
import Header from './components/Header';


function App() {
const [number,setNumber] = useState(0);
const data = useMemo(() => {
 return calculateObject();
}, [number]);

   return (
    <div className="App">
        <Header number = {number < 5 ? 0 : number} data = {data}/>
        <hr />
        <h1>{number}</h1>
        <button onClick={() => setNumber(number+1)}>Clik</button>
    </div>
  );
}

function calculateObject() {
  return {name: "samet"};
}

export default App;
