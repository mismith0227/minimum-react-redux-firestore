import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Button from '.'

storiesOf('1_core/Button').add('Default', () => (
  <Button onClick={action('onClick')}>{text('buttonlabel', 'ボタン')}</Button>
))
