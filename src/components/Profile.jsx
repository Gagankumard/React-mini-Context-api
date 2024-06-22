import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user) return <div style={{fontSize:20,paddingTop:10,paddingBottom:10,color:'green'}}>Please Login</div>

    return <div style={{fontSize:20,paddingTop:10,paddingBottom:10,color:'green'}}>Welcome {user.username}</div>
}

export default Profile