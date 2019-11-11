'use strict'

import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {BrowserRouter as Router, Switch, Route, useParams, Redirect} from "react-router-dom"
import UserPage from 'components/user-page'
import HomePage from 'components/home-page'

const AppContent = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>{props.userPage ? <Redirect to={props.renderPage} /> : <HomePage {...props} />}</Route>
        <Route path={props.renderPage}>{props.userPage ? <UserPage {...props} /> : <Redirect to='/' />}</Route>
      </Switch>
    </Router>
  )
}

AppContent.propTypes = {
  renderPage: PropTypes.string,
  userPage: PropTypes.bool
}

export default AppContent
