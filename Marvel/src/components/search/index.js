'use strict'

import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import './search.scss'

const Search = ({handleSearch}) => (
  <div className="search">
    <input
      type='search'
      placeholder='Buscar'
      onKeyUp={handleSearch}
    />
  </div>
)

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired
}

export default Search
