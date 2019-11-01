'use strict'

import React, {Fragment} from 'react'
import Search from 'components/search'
import Menu from 'components/menu'
import Users from 'components/users'
import PropTypes from 'prop-types'

const AppContent = ({
  selectedTrash,
  selectedChecked,
  selectedAll,
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
          fillTrash={selectedTrash ? "#a4cb09" : "#a2a2a2"}
          fillDoublechecked={selectedChecked ? "#a4cb09" : "#a2a2a2"}
          menuAllUsers = {menuAllUsers}
          menuCheckedUsers = {menuCheckedUsers}
          menuDiscardedUsers = {menuDiscardedUsers}
          classAll = {selectedAll ? "enabled" : "disabled"}
          classTrash = {selectedTrash ? "enabled" : "disabled"}
          classChecked = {selectedChecked ? "enabled" : "disabled"}
        />
        <Users 
          users={activeList}
          allButton = {allButton}
          trashButton = {trashButton}
          checkedButton = {checkedButton}
          displayAll = {selectedAll ? "none" : "flex"}
          displayChecked = {selectedChecked ? "none" : "flex"}
          displayTrash = {selectedTrash ? "none" : "flex"}
        />
    </Fragment>
  )
}

AppContent.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
  display: PropTypes.string,
  selectedAll: PropTypes.bool,
  selectedTrash: PropTypes.bool.isRequired,
  selectedChecked: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  allButton: PropTypes.func.isRequired,
  trashButton: PropTypes.func.isRequired,
  checkedButton: PropTypes.func.isRequired,
  menuAllUsers: PropTypes.func.isRequired,
  menuCheckedUsers: PropTypes.func.isRequired,
  menuDiscardedUsers: PropTypes.func.isRequired
}

export default AppContent
