'use strict'

import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Search = ({isDisabled, handleSearch}) => (
  <Fragment>
    <div className='search' className='search-box' id='searchField'>
      <p>Digite o nome do usuário</p>
      <input
        type='search'
        placeholder='...'
        disabled={isDisabled}
        onKeyUp={handleSearch}
      />
    </div>
    <div className='search' className='search-box-two' id='searchFieldAfterResult'>
      <p>Digite o nome do usuário</p>
      <input
        type='search'
        placeholder='...'
        disabled={isDisabled}
        onKeyUp={handleSearch}
      />
    </div>
  </Fragment>
)

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
}

export default Search
