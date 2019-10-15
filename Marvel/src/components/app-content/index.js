'use strict'

import React, {Fragment} from 'react'
import Search from 'components/search'
import Menu from 'components/menu'
import Users from 'components/users'
import PropTypes from 'prop-types'

const AppContent = ({handleSearch}) => {
  return (
    <Fragment>
        <Search handleSearch={handleSearch} />
        <Menu/>
        <Users/>
    </Fragment>
  )
}

AppContent.propTypes = {
  handleSearch: PropTypes.func.isRequired,
}

export default AppContent
