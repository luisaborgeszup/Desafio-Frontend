'use strict'

import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import User from 'components/user'

const UserPage = ({
  users,
  previousPage,
  iconDisplay,
  selectedAvatar,
  selectedEmail,
  selectedDob,
  selectedLocation,
  selectedPhone,
  selectedPassword
}) => {
  return (
  <Fragment>
    <User 
      users={users}
      iconDisplay={iconDisplay}
      previousPage={previousPage}
      fillAvatar={selectedAvatar ? "#a4cb09" : "#a2a2a2"}
      fillEmail={selectedEmail ? "#a4cb09" : "#a2a2a2"}
      fillDob={selectedDob ? "#a4cb09" : "#a2a2a2"}
      fillLocation={selectedLocation ? "#a4cb09" : "#a2a2a2"}
      fillPhone={selectedPhone ? "#a4cb09" : "#a2a2a2"}
      fillPassword={selectedPassword ? "#a4cb09" : "#a2a2a2"}
      classAvatar={selectedAvatar ? "enabled" : "disabled"}
      classEmail={selectedEmail ? "enabled" : "disabled"}
      classDob={selectedDob ? "enabled" : "disabled"}
      classLocation={selectedLocation ? "enabled" : "disabled"}
      classPhone={selectedPhone ? "enabled" : "disabled"}
      classPassword={selectedPassword ? "enabled" : "disabled"}
    />
  </Fragment>
)}

UserPage.propTypes = {
  users: PropTypes.array,
  className: PropTypes.string,
  fill: PropTypes.string,
  display: PropTypes.string,
  iconDisplay: PropTypes.func,
  previousPage: PropTypes.func,
  iconDisplay: PropTypes.func,
  fillAvatar: PropTypes.string,
  fillEmail: PropTypes.string,
  fillDob: PropTypes.string,
  fillLocation: PropTypes.string,
  fillPhone: PropTypes.string,
  fillPassword: PropTypes.string,
  classAvatar: PropTypes.string,
  classEmail: PropTypes.string,
  classDob: PropTypes.string,
  classLocation: PropTypes.string,
  classPhone: PropTypes.string,
  classPassword: PropTypes.string,
  selectedAvatar: PropTypes.bool,
  selectedEmail: PropTypes.bool,
  selectedDob: PropTypes.bool,
  selectedLocation: PropTypes.bool,
  selectedPhone: PropTypes.bool,
  selectedPassword: PropTypes.bool,
}

export default UserPage
