import React from 'react'
import { render, screen } from '@testing-library/react'
import Questionnaire from '.'

test('renders title text', () => {
  render(<Questionnaire />)
  const linkElement = screen.getByText(/fill the form to start/i)
  expect(linkElement).toBeInTheDocument()
})
