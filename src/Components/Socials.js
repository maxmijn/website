import React from 'react'
import { FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa'

function Socials () {
  return (
    <div>
      <a href='//https://github.com/maxmijn' >
        <FaGithub />
      </a>
      <a href='//https://www.instagram.com/maxmijn/'>
        <FaInstagram class='Social' />
      </a>
      <a href='mailto:max.mijnheer@gmail.com'>
        <FaEnvelope class='Social' />
      </a>
    </div>
  )
}

export default Socials
