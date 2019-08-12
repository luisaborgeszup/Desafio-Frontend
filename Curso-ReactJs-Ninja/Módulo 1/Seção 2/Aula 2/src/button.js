'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children, handleClick }) => (
  <button onClick={handleClick}>
    { children }
  </button>
)

Button.propTypes = {
  handleClick: PropTypes.func.isRequired
}

export default Button
