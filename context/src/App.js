import {TeamProvider} from './context/ThemeContext';
import { UserProvider } from './context/UserContext';

import './App.css';
import Container from './components/Container';

function App() {
  return (
      <TeamProvider> 
        <UserProvider>
          <Container/>
        </UserProvider> 
      </TeamProvider>
  );
}

export default App;
