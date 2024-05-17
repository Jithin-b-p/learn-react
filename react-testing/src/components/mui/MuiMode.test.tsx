import { render, screen } from "../../test-utils";
import { MuiMode } from "./MuiMode";

describe("MuiMode", () => {
  test("renders test correctly", () => {
    // specifying context provider individually
    render(<MuiMode />);
    const headingElement = screen.getByRole("heading");

    expect(headingElement).toHaveTextContent("dark mode");
  });
});
