'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const Repos = ({className, title, repos}) => (
  <div className='repositorys' className={className}>
    <h2>{title}</h2>
    <div>
      {repos.map((repo, index) => (
        <p key={index}>
          <a href={repo.link}>{repo.name}</a>
        </p>
      ))}
    </div>
  </div>
)

Repos.defaultProps = {
  className: ''
}

Repos.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.array
}

export default Repos
