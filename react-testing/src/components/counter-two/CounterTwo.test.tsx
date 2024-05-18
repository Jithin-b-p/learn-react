import { render, screen } from '@testing-library/react'
import { CounterTwo } from './CounterTwo'
import user from '@testing-library/user-event'

describe('Counter TWo', () => {
  test('renders correctly', () => {
    render(<CounterTwo count={0} />)
    const testElement = screen.getByText('Counter Two')
    expect(testElement).toBeInTheDocument()
  })

  // writing a test for handlers are called
  test('handlers are called', async () => {
    user.setup()
    // using jest mock function to pass as handlers
    const incrementHandler = jest.fn()
    const decrementHandler = jest.fn()

    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />,
    )

    const incrementBtn = screen.getByRole('button', { name: 'Increment' })
    const decrementBtn = screen.getByRole('button', { name: 'Decrement' })
    await user.click(incrementBtn)
    await user.click(decrementBtn)

    expect(incrementHandler).toHaveBeenCalledTimes(1)
    expect(decrementHandler).toHaveBeenCalledTimes(1)
  })
})
