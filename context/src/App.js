import Button from './components/Button';
import ThemeContext from './context/ThemeContext';
import './App.css';

function App() {
  return (
      <ThemeContext.Provider value='dark'>
        <Button/>
      </ThemeContext.Provider>
  );
}

export default App;
