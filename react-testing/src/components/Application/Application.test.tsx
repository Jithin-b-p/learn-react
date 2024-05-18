import { render, screen } from '@testing-library/react'

import { Application } from './Application'

describe('Application', () => {
  test('renders correctly', () => {
    render(<Application />)

    // const pageHeading = screen.getByRole("heading", {
    //   name: "Job application form",
    // });
    // expect(pageHeading).toBeInTheDocument();

    // const sectionHeading = screen.getByRole("heading", { name: "Section 1" });
    // expect(sectionHeading).toBeInTheDocument();

    // we can use level for heading also
    const pageHeading = screen.getByRole('heading', {
      level: 1,
    })
    expect(pageHeading).toBeInTheDocument()
    const sectionHeading = screen.getByRole('heading', { level: 2 })
    expect(sectionHeading).toBeInTheDocument()

    const imageElment = screen.getByAltText('a person with a laptop')
    expect(imageElment).toBeInTheDocument()

    const textElement = screen.getByText('All fields are mandatory')
    expect(textElement).toBeInTheDocument()

    const closeElement = screen.getByTitle('close')
    expect(closeElement).toBeInTheDocument()

    const customElement = screen.getByTestId('custom-element')
    expect(customElement).toBeInTheDocument()

    const nameElement = screen.getByRole('textbox', { name: 'Name' })
    expect(nameElement).toBeInTheDocument()
    // const nameElement2 = screen.getByLabelText("Name");
    // expect(nameElement2).toBeInTheDocument();
    // if our section has a label of Name same as textbox
    // we can use the option to be more specific about our element
    const nameElement3 = screen.getByLabelText('Name', {
      selector: 'input',
    })
    expect(nameElement3).toBeInTheDocument()
    const nameElement4 = screen.getByPlaceholderText('Fullname')
    expect(nameElement4).toBeInTheDocument()
    const nameElement5 = screen.getByDisplayValue('Jithin')
    expect(nameElement5).toBeInTheDocument()

    const jobLocationElement = screen.getByRole('combobox')
    expect(jobLocationElement).toBeInTheDocument()

    const bioElement = screen.getByRole('textbox', {
      name: 'Bio',
    })
    expect(bioElement).toBeInTheDocument()

    const termsElement = screen.getByRole('checkbox')
    expect(termsElement).toBeInTheDocument()
    const termElement2 = screen.getByLabelText(
      'I agree to the terms and conditions',
    )
    expect(termElement2).toBeInTheDocument()

    const submitButtonElement = screen.getByRole('button')
    expect(submitButtonElement).toBeInTheDocument()
  })
})
