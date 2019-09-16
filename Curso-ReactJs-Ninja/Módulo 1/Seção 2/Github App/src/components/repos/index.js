'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import Pagination from '../pagination/index'
import './repos.scss'

const Repos = ({className, title, repos, handlePagination}) => (
  <div className='repositorys' className={className}>
    <h2>{title}</h2>
    <div>
      {repos.map((repo, index) => (
        <p key={index}>
          <a href={repo.link}>{repo.name}</a>
        </p>
      ))}
    </div>
    <Pagination
      total={10}
      activePage={3}
      onClick={handlePagination}
    />
  </div>
)

Repos.defaultProps = {
  className: '',
  repos: []
}

Repos.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  handlePagination: PropTypes.func.isRequired,
  repos: PropTypes.array
}

export default Repos
