'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const Actions = ({getRepos, getStarred}) => (
  <div className='buttons' className='actions'>
    <span className='button-repo' onClick={getRepos}>Ver Repositórios</span>
    <span className='button-fav' onClick={getStarred}>Ver Favoritos</span>
  </div>
)

Actions.propTypes = {
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
}

export default Actions
