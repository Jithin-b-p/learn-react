import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";
import user from "@testing-library/user-event";

describe("Counter", () => {
  test("render correctly", () => {
    render(<Counter />);

    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    expect(incrementButton).toBeInTheDocument();
  });

  test("renders a count 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("renders a count with 1 after clicking the increment button", async () => {
    user.setup();
    render(<Counter />);
    const incrementBtn = screen.getByRole("button", { name: "Increment" });

    await user.click(incrementBtn);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });
});
