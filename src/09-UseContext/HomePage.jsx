import React, { useContext } from 'react'
import { UserContext } from './Context/UserContext'
import { json } from 'react-router-dom'

export const HomePage = () => {
  const { user,setUser } = useContext(UserContext)
  return (
    <>
    <h2> Home Page {user?.userName} </h2>
      <pre> { JSON.stringify(user, null,3) } </pre>
      <button className='btn btn-primary'
        onClick={() => setUser( {userId: '00001',userName: 'Stalin Uceta', userLogin:'suceta@goplaca.com'} )}  
      >
        login
      </button>
    </>
  )
}
