'use strict'

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Pagination from './index'

const stories = storiesOf('Pagination', module)

stories.add('without props', () => (
  <Pagination />
))

stories.add('with total and activePage', () => (
  <Pagination
    total={10}
    activePage={5}
  />
))

stories.add('with page link', () => (
  <Pagination
    total={7}
    activePage={3}
    pageLink='https://media.tenor.com/images/a7c57ecb945c0e603dceca7e29fcc2db/tenor.gif'  
  />
))

stories.add('with callback', () => (
  <Pagination
    total={15}
    activePage={2}
    pageLink='https://media.tenor.com/images/a7c57ecb945c0e603dceca7e29fcc2db/tenor.gif'
    onClick={(page) => {
      window.alert(page)
    }}  
  />
))
