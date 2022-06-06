import React from 'react'
import {FiLinkedin} from 'react-icons/fi'
import {FiGithub} from 'react-icons/fi'
import {IoLogoBitbucket} from 'react-icons/io'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/lucasbear" target="_blank" rel='tooltip noopener noreferrer' title='Follow me on LinkedIn'><FiLinkedin/></a>
        <a href="https://github.com/tGraffe" target="_blank"  rel='tooltip noopener noreferrer' title='My things on GitHub'><FiGithub/></a>
        <a href="https://bitbucket.com/lucasB_py" target="_blank" rel='tooltip noopener noreferrer' title='My things on BitBucket'><IoLogoBitbucket/></a>
    </div>
  )
}

export default HeaderSocials