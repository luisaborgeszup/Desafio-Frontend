'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import './users.scss'

const Users = ({users, allButton, checkedButton, trashButton}) => (
  <div>
    {users.length ? (
      <div className="users">
        {users.length && users.map((user, index) => (
          <div key={index} className="user">
            <span><img src={user.picture.thumbnail} id="image"></img></span>
            <span id="name">{user.name.first}</span>
            <span id="username">{user.login.username}</span>
            <span id="phone">{user.phone}</span>
            <span id="location">{user.location.city} - {user.location.state}</span>
            <img src="../../icons/trashcan.png" id="trashcan" onClick={() => trashButton(user.login.username)}></img>
            <span id="all-outside" onClick={() => allButton(user.login.username)} ><span  id="all-inside"></span></span>
            <img src="../../icons/checked.png" id="check" onClick={() => checkedButton(user.login.username)}></img>
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
  allButton: PropTypes.func.isRequired,
  checkedButton: PropTypes.func.isRequired,
  trashButton: PropTypes.func.isRequired
}

export default Users
