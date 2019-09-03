'use strict'

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Pagination from './index';

storiesOf('Pagination', module)
  .add('Pagination Component', () => (
    <Pagination />
))