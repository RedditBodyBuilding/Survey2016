import 'babel-core/polyfill'
import React from 'react'
import { render } from 'react-dom'
import Root from './Root'
import '../server/stylesheets/main.scss'


render(
  <Root />,
  document.getElementById('root')
)
