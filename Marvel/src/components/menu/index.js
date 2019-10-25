'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import './menu.scss'

const Menu = ({menuAllUsers, menuCheckedUsers, menuDiscardedUsers}) => (
    <div className="menu" >
        <p tabIndex="1" onClick={menuAllUsers}>
          <span id="all-outside"><span id="all-inside"></span></span>
          <span id="text">Todos</span>
        </p>
        <p tabIndex="1" onClick={menuCheckedUsers}>
          <span><img src="../../icons/doublechecked.svg" id="check"></img></span>
          <span id="text">Atendidos</span>
        </p>
        <p tabIndex="1" onClick={menuDiscardedUsers}>
          <span><img src="../../icons/trashcan.svg" id="trashcan"></img></span>
          <span id="text">Lixeira</span>
        </p>
    </div>
)

Menu.propTypes = {
  allUsers: PropTypes.func,
  checkedUsers: PropTypes.func,
  discardedUsers: PropTypes.func
}

export default Menu
