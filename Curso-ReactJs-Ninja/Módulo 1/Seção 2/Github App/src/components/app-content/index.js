'use strict'

import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import Search from 'components/search'
import UserInfo from 'components/user-info'
import Actions from 'components/actions'
import Repos from 'components/repos'

const AppContent = ({userinfo,
  repos,
  starred,
  isFetching,
  firstSearch,
  handleSearch,
  getRepos,
  getStarred,
  handlePagination
}) => {
  const enableFirstLoader = () => {
    return (
      <div className='loader-box'>
        <div className='loader' />
      </div>
    )
  }

  const enableLoader = () => {
    return (
      <div className='loader-box-two'>
        <div className='loader-two' />
      </div>
    )
  }

  const renderRepos = () => {
    return (
      <Repos
        className='repos'
        title='Repositórios'
        repos={repos}
        handlePagination={(clicked) => handlePagination('repos', clicked)}
      />
    )
  }

  const renderStarred = () => {
    return (
      <Repos
        className='starred'
        title='Favoritos'
        repos={starred}
        handlePagination={(clicked) => handlePagination('starred', clicked)}
        />
    )
  }

  return (
    <Fragment>
      <div className='head'>
        <p>Github Api</p>
      </div>
      <div className='app'>
        {!isFetching && firstSearch && <Search isDisabled={isFetching} handleSearch={handleSearch} />}
        {isFetching && firstSearch && enableFirstLoader()}
        {userinfo &&
          <div className='interface' id='interface'>
            <div className='menu'>
              <UserInfo userinfo={userinfo} />

              <Actions
                getRepos={getRepos}
                getStarred={getStarred}
              />
            </div>

            <div className='repositories'>
              {!!repos.repos.length && renderRepos()}

              {!!starred.repos.length && renderStarred()}
            </div>

            {!isFetching && <Search firstSearch={firstSearch} isDisabled={isFetching} handleSearch={handleSearch} />}

            {isFetching && enableLoader()}
          </div>
        }
      </div>
    </Fragment>
  )
}

const reposPropTypes = {
  repos: PropTypes.array.isRequired,
  pagination: PropTypes.object
}

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.shape(reposPropTypes).isRequired,
  starred: PropTypes.shape(reposPropTypes).isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handlePagination: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
}

export default AppContent
