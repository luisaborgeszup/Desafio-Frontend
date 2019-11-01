'use strict'

import React from 'react'
import {ReactComponent as TrashcanSVG} from 'icons/trashcan.svg'
import {ReactComponent as DoublecheckedSVG} from 'icons/doublechecked.svg'
import PropTypes from 'prop-types'
import './menu.scss'

const Menu = ({
  classTrash,
  classChecked,
  classAll,
  menuAllUsers,
  menuCheckedUsers,
  menuDiscardedUsers,
  fillTrash,
  fillDoublechecked,
}) => (
  <div className="menu" >
      <p tabIndex="1" onClick={menuAllUsers} className={classAll}>
        <span id="all-outside"><span id="all-inside"></span></span>
        <span id="text-all" className={classAll}>Todos</span>
      </p>
      <p tabIndex="1" onClick={menuCheckedUsers}>
        <DoublecheckedSVG fill={fillDoublechecked} id="check"/>
        <span id="text-check" className={classChecked}>Atendidos</span>
      </p>
      <p tabIndex="1" onClick={menuDiscardedUsers}>
        <TrashcanSVG fill={fillTrash} id="trash"/>
        <span id="text-trash" className={classTrash}>Lixeira</span>
      </p>
  </div>
)

Menu.propTypes = {
  classAll: PropTypes.string,
  classTrash: PropTypes.string,
  classChecked: PropTypes.string,
  fillTrash: PropTypes.string,
  fillDoublechecked: PropTypes.string,
  allUsers: PropTypes.func,
  checkedUsers: PropTypes.func,
  discardedUsers: PropTypes.func
}

export default Menu
