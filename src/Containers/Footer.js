import React from 'react'
import Socials from '../Components/Socials'

function FirstCase () {
  return (
    <div className='Footer'>
      <p>&copy; {new Date().getFullYear()} Max Mijnheer</p>
      <Socials />
    </div>
  )
}

export default FirstCase
