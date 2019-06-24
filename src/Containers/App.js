import React from 'react'
import '../Styling/App.css'
import LandingPage from './LandingPage'
import FirstCase from './FirstCase'

function App () {
  return (
    <div>
      <div className='Fadebar' />
      <div className='FadebarBottom' />
      <LandingPage />
      <FirstCase />
    </div>
  )
}

export default App
