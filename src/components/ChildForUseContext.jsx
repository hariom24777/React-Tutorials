import React, { useContext } from 'react'
import { UserContext } from '../pages/Practice'

const ChildForUseContext = () => {
    const user = useContext(UserContext)
  return (
    <div className='useContext'>
        <h4>UseContext</h4>
        <p>Username: <span>{user.Username}</span></p>
    </div>
  )
}

export default ChildForUseContext