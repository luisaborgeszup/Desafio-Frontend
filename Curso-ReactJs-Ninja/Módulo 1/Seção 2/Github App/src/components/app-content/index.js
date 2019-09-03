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
  getStarred
}) => {

  const enableFirstLoader = () => {
    return (
      <div className='loader-box'>
        <div className='loader'></div>
      </div>
    )
  }

  const enableLoader = () => {
    return (
      <div className='loader-box-two'>
        <div className='loader-two'></div>
      </div>
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
        <p>Github Api</p>
      </div>
      <div className='app'>
        {!isFetching && firstSearch && <Search  isDisabled={isFetching} handleSearch={handleSearch} />}
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
              {!!repos.length && renderRepos()}

              {!!starred.length && renderStarred()}
            </div>

            {!isFetching && <Search firstSearch={firstSearch} isDisabled={isFetching} handleSearch={handleSearch} />}

            {isFetching && enableLoader()}
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
