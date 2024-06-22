import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text' style={{fontSize:25,textAlign:'center',borderRadius:50}}
        value={username}
        onChange={(e) => setUsername(e.target.value) }
        placeholder='username'  />
        {" "}
        <input type='text' style={{fontSize:25,textAlign:'center',borderRadius:50}}
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password'  />
        <button onClick={handleSubmit} style={{fontSize:25,marginTop:15,marginBottom:15,borderRadius:50}}>Submit</button>
    </div>
  )
}

export default Login