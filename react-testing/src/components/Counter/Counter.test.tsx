import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'
import user from '@testing-library/user-event'

describe('Counter', () => {
  test('render correctly', () => {
    render(<Counter />)

    const headingElement = screen.getByRole('heading')
    expect(headingElement).toBeInTheDocument()

    const incrementButton = screen.getByRole('button', { name: 'Increment' })
    expect(incrementButton).toBeInTheDocument()
  })

  test('renders a count 0', () => {
    render(<Counter />)
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('0')
  })

  test('renders a count with 1 after clicking the increment button', async () => {
    user.setup()
    render(<Counter />)
    const incrementBtn = screen.getByRole('button', { name: 'Increment' })

    await user.click(incrementBtn)

    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('1')
  })

  // keyboard interaction
  test('renders a count of 10 after clicking the set button', async () => {
    user.setup()
    render(<Counter />)
    // logRoles(view.container);
    const amountInput = screen.getByRole('spinbutton')
    await user.type(amountInput, '10')
    expect(amountInput).toHaveValue(10)

    const setBtn = screen.getByRole('button', { name: 'Set' })
    await user.click(setBtn)
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('10')
  })

  test('elements are focused in the right order', async () => {
    user.setup()
    render(<Counter />)
    const amountInput = screen.getByRole('spinbutton')
    const setBtn = screen.getByRole('button', { name: 'Set' })
    const incrementBtn = screen.getByRole('button', { name: 'Increment' })

    await user.tab()
    expect(incrementBtn).toHaveFocus()
    await user.tab()
    expect(amountInput).toHaveFocus()
    await user.tab()
    expect(setBtn).toHaveFocus()
  })
})
