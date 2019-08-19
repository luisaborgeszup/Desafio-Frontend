'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const Search = ({isDisabled, handleSearch}) => (
  <div className='search'>
    <input
      className='input'
      type='search'
      placeholder='Digite o nome do usuário'
      disabled={isDisabled}
      onKeyUp={handleSearch}
    />
    <p />
  </div>
)

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
}

export default Search
