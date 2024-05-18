import { logRoles, render, screen } from '@testing-library/react'
import { Skills } from './Skills'

describe('Skills', () => {
  const skills = ['HTML', 'CSS', 'SASS', 'JAVASCRIPT']
  test('renders correctly', () => {
    render(<Skills skills={skills} />)
    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument()
  })

  // The test function provided by JEST, It takes a description as first argument for our test. The second argument is a callback function which contains the test logic.The render function is providered by testing library which renders the specified component as argument. With screen obj provided by testing library we can query the rendered component. We can use query method according to which element our test belongs. Then we can assert with the element using expect function provided by jest. We can use matchers for this.(asserting what we are expecting)
  test('renders all list items correctly', () => {
    const view = render(<Skills skills={skills} />)
    logRoles(view.container)

    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(skills.length)
  })

  test('renders login button', () => {
    render(<Skills skills={skills} />)

    const loginBtnElement = screen.getByRole('button', { name: 'Login' })
    expect(loginBtnElement).toBeInTheDocument()
  })

  // test("renders start learning button", () => {
  //   render(<Skills skills={skills} />);
  //   const startLearningBtnElement = screen.getByRole("button", {
  //     name: "Start learning",
  //   });
  //   expect(startLearningBtnElement).not.toBeInTheDocument();
  // });

  // screen.debug();
  test('renders start learning after some times', async () => {
    render(<Skills skills={skills} />)
    const startLearningBtnElement = await screen.findByRole(
      'button',
      {
        name: 'Start learning',
      },
      { timeout: 2000 },
    )
    expect(startLearningBtnElement).toBeInTheDocument()
  })
})
