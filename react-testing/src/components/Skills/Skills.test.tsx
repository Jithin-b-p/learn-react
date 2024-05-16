import { render, screen } from "@testing-library/react";
import { Skills } from "./Skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "SASS", "JAVASCRIPT"];
  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders all list items correctly", () => {
    render(<Skills skills={skills} />);

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(skills.length);
  });
});
