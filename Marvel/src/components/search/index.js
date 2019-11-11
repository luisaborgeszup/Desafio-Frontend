'use strict'

import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Profile from 'components/profile'
import './search.scss'

const Search = ({handleSearch, profile}) => (
  <div className="search">
    <img src="../../../icons/search.svg" id="search-icon"></img>
    <input
      type='text'
      placeholder='Buscar'
      onKeyUp={handleSearch}
    />
    <Profile profile={profile}/>
  </div>
)

Search.propTypes = {
  profile: PropTypes.array,
  handleSearch: PropTypes.func.isRequired
}

export default Search
