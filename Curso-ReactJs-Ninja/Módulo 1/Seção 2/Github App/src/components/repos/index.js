'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import Pagination from '../pagination/index'
import './repos.scss'

const Repos = ({className, title, repos, handlePagination}) => (
  <div className='repositorys' className={className}>
    <h2>{title}</h2>
    <div>
      {repos.repos.map((repo, index) => (
        <p key={index}>
          <a href={repo.link}>{repo.name}</a>
        </p>
      ))}
    </div>
    <Pagination
      total={repos.pagination.total}
      activePage={repos.pagination.activePage}
      onClick={handlePagination}
    />
  </div>
)

Repos.defaultProps = {
  className: ''
}

Repos.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  handlePagination: PropTypes.func.isRequired,
  repos: PropTypes.shape({
    repos: PropTypes.arrayOf(PropTypes.shape({
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })).isRequired,
    pagination: PropTypes.shape({
      total: PropTypes.number,
      activePage: PropTypes.number
    }).isRequired
  })
}

export default Repos
