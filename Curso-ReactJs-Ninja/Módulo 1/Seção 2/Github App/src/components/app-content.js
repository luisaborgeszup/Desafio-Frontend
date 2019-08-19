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
  handleSearch,
  getRepos,
  getStarred
}) => (
  <Fragment>
    <div className='head'>
      <p className='title'>Github Api</p>
    </div>
    <div className="background-color" className='app'>
      <Search isDisabled={isFetching} handleSearch={handleSearch} />
      {isFetching && <div className='loader'></div> && (document.getElementById('searchField').style.display="none")}
      {!!isFetching && (document.getElementById('searchFieldAfterResult').style.display="block")}
      {!!isFetching && (document.getElementById('interface').style.display="block")}
      <div className='interface' id='interface'>
        {!!userinfo && <UserInfo userinfo={userinfo} />}
        {!!userinfo && <Actions
          getRepos={getRepos}
          getStarred={getStarred}
        />}

        {!!repos.length &&
          <Repos
            className='repos'
            title='Repositórios'
            repos={repos}
          />
        }

        {!!starred.length &&
          <Repos
            className='starred'
            title='Favoritos'
            repos={starred}
          />
        }
      </div>
    </div>
  </Fragment>
)

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
