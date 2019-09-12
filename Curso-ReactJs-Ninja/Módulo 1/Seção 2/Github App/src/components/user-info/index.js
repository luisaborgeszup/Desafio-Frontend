'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import './user-info.scss'

const UserInfo = ({userinfo}) => (
  <div className='user-info'>
    <div className='userinfo-style'>
      <img src={userinfo.photo} />
      <h1>
        <a href={`https://github.com/${userinfo.login}`}>
          {userinfo.username}
        </a>
      </h1>
      <div className='repos-info'>
        <p>Repositórios: {userinfo.repos}</p>
        <p>Seguidores: {userinfo.followers}</p>
        <p>Seguindo: {userinfo.following}</p>
      </div>
    </div>
  </div>

)

UserInfo.propTypes = {
  userinfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired
  })
}

export default UserInfo
