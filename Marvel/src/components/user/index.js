import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import {ReactComponent as PreviousSVG} from 'icons/previous.svg'
import {ReactComponent as AvatarSVG} from 'icons/avatar.svg'
import {ReactComponent as EmailSVG} from 'icons/email.svg'
import {ReactComponent as DobSVG} from 'icons/dob.svg'
import {ReactComponent as LocationSVG} from 'icons/location.svg'
import {ReactComponent as PhoneSVG} from 'icons/phone.svg'
import {ReactComponent as PasswordSVG} from 'icons/password.svg'
import './user.scss'

const User = ({
  users, 
  iconDisplay,
  fillAvatar,
  fillEmail,
  fillDob,
  fillLocation,
  fillPhone,
  fillPassword,
  classAvatar,
  classEmail,
  classDob,
  classLocation,
  classPhone,
  classPassword,
  previousPage
}) => (
  <div>  
    <PreviousSVG className="previous-button" onClick={previousPage}/>
    <div className="user-page">
      <div className="user-box"></div>
      {users.length && users.map((user, index) => (
        <div key={index} id="data">
            <div id="image-border">
              <img src={user.picture.large} id="image"></img>
            </div>
            <div>
              <div className={classAvatar}> 
                <p id="introduction">Hi, my name is</p>
                <p id="info">{user.name.first} {user.name.last}</p>
              </div>
              <div className={classEmail}>
                <p id="introduction">My email adress is</p>
                <p id="info">{user.email}</p>
              </div>
              <div className={classDob}>
                <p id="introduction">My birthday is</p>
                <p id="info">{user.dob.date}</p>
              </div>
              <div className={classLocation}>
                <p id="introduction">My adress is</p>
                <p id="info">{user.location.street.name}, {user.location.street.number}</p>
              </div>
              <div className={classPhone}>
                <p id="introduction">My phone number is</p>
                <p id="info">{user.phone}</p>
              </div>
              <div className={classPassword}>
                <p id="introduction">My passowrd is</p>
                <p id="info">{user.login.password}</p>
              </div>
            </div>
            <span id="icons">
              <div onMouseOver={() => iconDisplay("avatar")}>
                <AvatarSVG id="icon" fill={fillAvatar}/>
              </div>
              <div onMouseOver={() => iconDisplay("email")}>
                <EmailSVG id="icon" fill={fillEmail}/>
              </div>
              <div onMouseOver={() => iconDisplay("dob")}>
                <DobSVG id="icon" fill={fillDob}/>
              </div>
              <div onMouseOver={() => iconDisplay("location")}>
              <LocationSVG id="icon" fill={fillLocation}/>
              </div>
              <div onMouseOver={() => iconDisplay("phone")}>
                <PhoneSVG id="icon" fill={fillPhone}/>
              </div>
              <div onMouseOver={() => iconDisplay("password")}>
                <PasswordSVG id="icon" fill={fillPassword}/>
              </div>          
            </span>
        </div>
      ))}
    </div>
  </div>
)

User.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.shape({
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired
    }).isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    login: PropTypes.shape({
      password: PropTypes.string,
    }),
    dob: PropTypes.shape({
      date: PropTypes.date
    }),
    location: PropTypes.shape({
      street: PropTypes.shape({
        number: PropTypes.number,
        name: PropTypes.string
      }),
    }),
    picture: PropTypes.shape({
      large: PropTypes.string.isRequired
    })
  })),
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
  previousPage: PropTypes.func
}

export default User