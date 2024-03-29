import Header from './Header';
import Button from './Button';

import {useTheme} from '../context/ThemeContext';
import Profile from './Profile';


function Container() {
    const {theme} = useTheme();
  return (
    <div className={`app ${theme === 'dark' ? theme : ''}`}>
     <Header/>
        <hr />
    <Button/>
    <Profile/>
    </div>
  )
}

export default Container