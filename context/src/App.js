import Button from './components/Button';
import {TeamProvider} from './context/ThemeContext';
import Header from './components/Header';
import './App.css';

function App() {
  return (
      <TeamProvider>  
        <Header/>
        <hr />
        <Button/>
      
      </TeamProvider>
  );
}

export default App;
