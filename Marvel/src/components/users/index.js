'use strict'

import React from 'react'
import './users.scss'

const Users = (users, getUsers) => (
    <div className="users">
            <div>
                <span id="name">{users.name.first}</span>
                <span id="user-data">{users.email}</span>
                <span id="user-data">{users.phone}</span>
                <span id="user-data">{users.location.city} - {user.location.state}</span>
            </div>
        ))}
    </div>
)

Repos.propTypes = {
    users: PropTypes.shape({
        name: PropTypes.shape({
            first: PropTypes.string.isRequired,
            last: PropTypes.string.isRequired
        }).isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        location: PropTypes.shape({
            city: PropTypes.string.isRequired,
            state: PropTypes.string.isRequired
        }).isRequired,
    })
}

export default Users
