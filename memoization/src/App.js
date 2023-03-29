import './App.css';
import { useState ,useMemo , useCallback} from 'react';
import Header from './components/Header';


function App() {
const [number,setNumber] = useState(0);
const data = useMemo(() => {
 return calculateObject();
}, [number]);
const increment = useCallback(() => {
  setNumber((prevState) => prevState + 1);
},[]);

   return (
    <div className="App">
        <Header number = {number < 5 ? 0 : number} data = {data} increment = {increment}/>
        <hr />
        <h1>{number}</h1>
       
    </div>
  );
}

function calculateObject() {
  return {name: "samet"};
}

export default App;
