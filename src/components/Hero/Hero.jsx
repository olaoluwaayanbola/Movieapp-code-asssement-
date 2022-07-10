import React from 'react'
import './Hero.scss'
import background from './img/Rectangle5.png'
const Hero = () => {
  return (
    <div className='heroContainer' style={{ backgroundImage: `url(${background})` }}>
      <p>
        Watch
        something
        incredible.
      </p>
    </div>
  )
}

export default Hero