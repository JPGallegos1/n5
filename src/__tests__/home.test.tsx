import { render, screen } from "@testing-library/react";

import Home from "../pages/index";
import "@testing-library/jest-dom";

describe("renders the landing page", () => {
  it("renders the ", () => {
    render(<Home />);

    const header = screen.getByRole("banner");
    const nav = screen.getByRole("navigation");

    const main = screen.getByRole("main");
    const link = screen.getByRole("link", {
      name: "See all products",
    });
    const hero = screen.getByAltText("Market's image");
    const heading = screen.getByRole("heading", {
      name: "Indulge in Culinary Delights at The Great Food Market",
    });

    expect(header).toBeInTheDocument();
    expect(main).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(hero).toBeInTheDocument();
    expect(nav).toBeInTheDocument();
  });
});
