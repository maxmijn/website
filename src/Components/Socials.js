import React from 'react'
import { FaInstagram, FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa'

function Socials () {
  return (
    <div>
      <a href='//www.linkedin.com/in/max-mijnheer-5612ab114/' >
        <FaLinkedin size={20} className='Social' />
      </a>
      <a href='//github.com/maxmijn' >
        <FaGithub size={20} className='Social' />
      </a>
      <a href='//www.instagram.com/maxmijn/'>
        <FaInstagram size={20} className='Social' />
      </a>
      <a href='mailto:max.mijnheer@gmail.com'>
        <FaEnvelope size={20} />
      </a>
    </div>
  )
}

export default Socials
