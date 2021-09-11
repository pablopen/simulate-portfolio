import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('Renders the app with the class name', () => {
  const { container } = render(<App />)

  expect(container.firstChild).toHaveClass('App')
})
