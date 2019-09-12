'use strict'

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import UserInfo from './index'

storiesOf('User Info', module)
  .add('User Info Component', () => (
    <UserInfo
      className='user-info'
      className='user-info-style'
      userinfo={{
        username: 'Luísa Lichfett',
        login: 'luisaborgeszup',
        photo: 'https://avatars2.githubusercontent.com/u/50245051?v=4',
        repos: 5,
        followers: 0,
        following: 1
      }}
    />
  ))
