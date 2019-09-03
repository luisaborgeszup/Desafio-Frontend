'use strict'

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Search from './index';

storiesOf('Search', module)
  .add('Search Component', () => (
    <Search
      className='search'
      className='search-box'
      handleSearch={action('Handle Search')}
    />
  ))