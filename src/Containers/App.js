import React from 'react'
import '../Styling/App.css'
import Navigation from '../Components/Navigation'
import LandingPage from './LandingPage'
import FirstCase from './FirstCase'
import Footer from './Footer'
import Cases from './Cases'

function App () {
  return (
    <div>
      <Navigation />
      <LandingPage />
      <FirstCase />
      <Cases />
      <Footer />
    </div>
  )
}

export default App
