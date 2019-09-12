'use strict'

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Actions from './index'

storiesOf('Actions', module)
  .add('Actions Component', () => (
    <Actions
      getRepos={action('Get Repos')}
      getStarred={action('Get Starred')}
    />
  ))
