'use strict'

import React, {Fragment} from 'react'
import Search from 'components/search'
import Menu from 'components/menu'
import Users from 'components/users'
import PropTypes from 'prop-types'

const AppContent = ({
  handleSearch,
  allButton,
  checkedButton,
  trashButton,
  menuAllUsers,
  menuCheckedUsers,
  menuDiscardedUsers,
  activeList
}) => {
  return (
    <Fragment>
        <Search handleSearch={handleSearch} />
        <Menu
          menuAllUsers = {menuAllUsers}
          menuCheckedUsers = {menuCheckedUsers}
          menuDiscardedUsers = {menuDiscardedUsers}
        />
        <Users 
          users={activeList}
          allButton = {allButton}
          trashButton = {trashButton}
          checkedButton = {checkedButton}
        />
    </Fragment>
  )
}

AppContent.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  allButton: PropTypes.func.isRequired,
  trashButton: PropTypes.func.isRequired,
  checkedButton: PropTypes.func.isRequired,
  menuAllUsers: PropTypes.func.isRequired,
  menuCheckedUsers: PropTypes.func.isRequired,
  menuDiscardedUsers: PropTypes.func.isRequired
}

export default AppContent
