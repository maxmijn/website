import React from 'react'
import { FaInstagram, FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa'

function Socials () {
  return (
    <div>
      <a href='//www.linkedin.com/in/max-mijnheer-5612ab114/' >
        <FaLinkedin />
      </a>
      <a href='//github.com/maxmijn' >
        <FaGithub className='Social' />
      </a>
      <a href='//www.instagram.com/maxmijn/'>
        <FaInstagram className='Social' />
      </a>
      <a href='mailto:max.mijnheer@gmail.com'>
        <FaEnvelope className='Social' />
      </a>
    </div>
  )
}

export default Socials
