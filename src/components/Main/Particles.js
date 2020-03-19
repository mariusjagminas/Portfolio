import React from 'react'
import ParticlesJS from 'react-particles-js'
import config from './particlesjs-config.json'

const Particles = () => {

  return (
    <ParticlesJS
      params={config}
    />
  )
}

export default Particles