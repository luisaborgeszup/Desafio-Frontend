'use strict'

import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({userinfo,
  repos,
  starred,
  isFetching,
  firstSearch,
  handleSearch,
  getRepos,
  getStarred
}) => {

  const enableLoader = () => {
    return (
      <div className='loader'></div>
    )
  }

  const renderRepos = () => {
    return (
      <Repos
        className='repos'
        title='Repositórios'
        repos={repos}
      />
    )
  }

  const renderStarred = () => {
    return (
      <Repos
        className='starred'
        title='Favoritos'
        repos={starred}
      />
    )
  }

  return (
    <Fragment>
      <div className='head'>
        <p className='title'>Github Api</p>
      </div>
      <div className="background-color" className='app'>
        {!isFetching && <Search firstSearch={firstSearch} isDisabled={isFetching} handleSearch={handleSearch} />}
        {isFetching && enableLoader()}
        {userinfo &&
          <div className='interface-background' id='interface'>
            <UserInfo userinfo={userinfo} />
            <Actions
              getRepos={getRepos}
              getStarred={getStarred}
            />

            {!!repos.length && renderRepos()}

            {!!starred.length && renderStarred()}
          </div>
        }
      </div>
    </Fragment>
  )
}

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
}

export default AppContent
