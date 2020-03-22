import React from 'react'
import ParticlesJS from 'react-particles-js'
import config from './particlesjs-config.json'
import PropTypes from 'prop-types'

const Particles = ({ width, height }) => {

  return (
    <ParticlesJS
      width={width}
      height={height - 20}
      params={config}
    />
  )
}

export default Particles

Particles.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
}