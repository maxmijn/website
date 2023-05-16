import React from 'react'
import ClickableSVG from '../Components/ClickableSVG'
import { Link, Element } from 'react-scroll'
import { FaAngleDown } from 'react-icons/fa'

function LandingPage () {
  return (
    <Element name='landingPage'>
      <div className='App row'>
        <div className='Left col-sm-6'>
          <h1>Hi, my name is Max Mijnheer. </h1>
          <h1>I am a full-stack developer and founder.</h1>
          <Link to='firstCase' smooth className='ArrowDownClick'><FaAngleDown className='ArrowDown' /></Link>
        </div>
        <div className='Right col-sm-6'>
          <ClickableSVG />
        </div>
      </div>
    </Element>
  )
}

export default LandingPage
