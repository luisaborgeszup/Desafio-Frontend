'use strict'

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Repos from './index'

storiesOf('Repos', module)
  .add('Repos Component', () => (
    <Repos
      title='Favoritos'
      className='repositories'
    />
  ))

  .add('With Repos', () => (
    <Repos
      title='Favoritos'
      className='repositories'
      repos={[{
        link: 'https://github.com/luisaborgeszup/Desafio-Frontend',
        name: 'Desafio Frontend'
      }]}
    />
  ))
