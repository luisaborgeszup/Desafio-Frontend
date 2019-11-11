import React from 'react'
import PropTypes from 'prop-types'
import './profile.scss'

const Profile = ({profile}) => (
  <span>
  {profile.length ? (
    <span>
      {profile.length && profile.map((profile, index) => (
        <span key={index}>
          <img src={profile.picture.thumbnail} id="image"></img>
        </span>
      ))}
    </span>
    ) : (
      <div></div>
    )
  }
  </span>
)

Profile.propTypes = {
  profile: PropTypes.arrayOf(PropTypes.shape({
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

export default Profile