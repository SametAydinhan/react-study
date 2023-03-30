import {TeamProvider} from './context/ThemeContext';

import './App.css';
import Container from './components/Container';

function App() {
  return (
      <TeamProvider>  
       <Container/>
      </TeamProvider>
  );
}

export default App;
