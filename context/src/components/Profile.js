import { useState}from 'react'
import {useUser} from '../context/UserContext'

function Profile() {
    const { user,setUser } = useUser();

    const [loading,setLoading] = useState(false);

    const handleLogin = () => {
      setLoading(true);
      setTimeout(() => {
        setUser({id:1, username:'samet', bio:'lorem ipsum'})
        setLoading(false);
      }, 1500);
      
    }
    const handleLogout = () => {
      setUser(null)
    }
  return (
  <div>
    {
      !user && (<button onClick={handleLogin}>{loading ? 'Loading...' : 'Login'}</button>)
    }
    <br /><br />
    <code>{JSON.stringify(user)}</code>
    <br /><br />
    {
      user && <button onClick={handleLogout}>Logout</button>
    }
  </div>
    
  )
}

export default Profile