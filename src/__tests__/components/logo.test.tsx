import { render, screen } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context.shared-runtime";

import Logo from "@/components/atoms/logo";
import "@testing-library/jest-dom";
import { createMockRouter } from "@/utils/tests";

describe("renders N5 logo", () => {
  it("renders the logo", () => {
    render(<Logo />);

    const logo = screen.getByRole("img", {
      name: "N5 Logo",
    });
    const anchor = screen.getByRole("link");

    expect(logo).toBeInTheDocument();
    expect(anchor).toBeInTheDocument();
  });

  it("renders a link of /products", () => {
    render(<Logo />);
    const anchor = screen.getByRole("link");

    expect(anchor).toHaveAttribute("href");
    expect(anchor).toHaveAccessibleDescription("navigate to products page");
  });

  it("renders a link of /products", () => {
    render(<Logo />);
    const logo = screen.getByRole("img");

    expect(logo).toHaveAttribute("alt");
  });

  it("navigate to /products", async () => {
    const router = createMockRouter({ pathname: "/products" });

    render(
      <RouterContext.Provider value={router}>
        <Logo />
      </RouterContext.Provider>,
    );

    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
