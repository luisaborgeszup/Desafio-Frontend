'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import {ReactComponent as DeleteSVG} from 'icons/delete.svg'
import {ReactComponent as CheckedSVG} from 'icons/checked.svg'
import './users.scss'

const Users = ({
  users,
  renderUser,
  allButton,
  checkedButton,
  trashButton,
  displayAll,
  displayChecked,
  displayTrash
}) => (
  <div>
    {users.length ? (
      <div className="users">
        {users.length && users.map((user, index) => (
          <div key={index} className="user">
            <span id="data" onClick={() => renderUser(user._id)}>
              <span><img src={user.picture.thumbnail} id="image"></img></span>
              <span id="name">{user.name.first}</span>
              <span id="email">{user.email}</span>
              <span id="phone">{user.phone}</span>
              <span id="location">{user.location.city} - {user.location.state}</span>
            </span>
            <span id="buttons">
              <DeleteSVG 
                id="trashcan" 
                onClick={() => trashButton(user.login.username)}
                display = {displayTrash}
              />
              <span 
                id="all-outside" 
                onClick={() => allButton(user.login.username)} 
                display = {displayAll}
              ><span  id="all-inside"></span></span>
              <CheckedSVG
                id="check"
                onClick={() => checkedButton(user.login.username)}
                display = {displayChecked}
              />
            </span>
          </div>
        ))}
      </div>
    ) : (
      <div></div>
    )}
  </div>
)

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.shape({
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired
    }).isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    location: PropTypes.shape({
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired
    }),
    picture: PropTypes.shape({
      large: PropTypes.string.isRequired,
      medium: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired
    })
  })),
  renderUser: PropTypes.func,
  allButton: PropTypes.func.isRequired,
  checkedButton: PropTypes.func.isRequired,
  trashButton: PropTypes.func.isRequired,
  displayTrash: PropTypes.string,
  displayAll: PropTypes.string,
  displayChecked: PropTypes.string
}

export default Users
