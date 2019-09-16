'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import pagination from '../../utils/pagination/index'
import Page from './page'
import './pagination.scss'

const Pagination = ({ total, activePage, pageLink, onClick }) => (
  <div className='pagination'>
    {pagination({ total, activePage }).map((page, index) => (
      <p key={index} className={`pagination-item ${activePage === page ? 'active' : ''}`} >
        <Page page={page} pageLink={pageLink.replace('%page%', page)} onClick={onClick} />
      </p>
    ))}
  </div>
)

Pagination.defaultProps = {
  pageLink: '',
  activePage: 1
}

Pagination.propTypes = {
  total: PropTypes.number,
  activePage: PropTypes.number,
  pageLink: PropTypes.string,
  onClick: PropTypes.func
}

export default Pagination
