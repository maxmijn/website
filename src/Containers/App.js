import React from 'react'
import '../Styling/App.css'
import LandingPage from './LandingPage'
import FirstCase from './FirstCase'
import Footer from './Footer'
import Cases from './Cases'

function App () {
  return (
    <div>
      <LandingPage />
      <FirstCase />
      <Cases />
      <Footer />
    </div>
  )
}

export default App
