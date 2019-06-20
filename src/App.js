import React from 'react'
import './App.css'
import Canvas from './Canvas'
import Socials from './Socials'

function App () {
  return (
    <div className='App row'>
      <div className='Left col-sm-6'>
        <h1>Hi!</h1>
        <p> My name is Max Mijnheer. I am a developer from Amsterdam. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. </p>
        <Socials />
      </div>
      <div className='Right col-sm-6'>
        <Canvas />
      </div>
    </div>
  )
}

export default App
