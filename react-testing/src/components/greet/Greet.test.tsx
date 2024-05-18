/*
greet should render the text hello and if a name is passed into the component it should render hello followed by the name
*/

import { render, screen } from '@testing-library/react'

import Greet from './Greet'

describe.only('Greet', () => {
  it('renders correctly', () => {
    render(<Greet />)
    const element = screen.getByText(/hello/i)

    expect(element).toBeInTheDocument()
  })

  describe('Nested', () => {
    it('renders with a name', () => {
      render(<Greet name="Jithin" />)

      const textElement = screen.getByText(/hello, jithin/i)

      expect(textElement).toBeInTheDocument()
    })
  })
})
