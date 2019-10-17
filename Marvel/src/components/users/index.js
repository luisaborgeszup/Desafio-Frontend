'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import './users.scss'

const Users = ({users}) => (
    <div>
        {users.length && users.map((user, index) => (
            <p key={index} className="users">
                <span className="name-and-picture">
                    <span id="picture"><img src={user.picture.thumbnail}></img></span>
                    <span id="name">{user.name.first}</span>
                </span>
                <span id="user-data">{user.email}</span>
                <span id="user-data">{user.phone}</span>
                <span id="user-data">{user.location.city} - {user.location.state}</span>
            </p>
        ))}
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
    }))
}

export default Users
