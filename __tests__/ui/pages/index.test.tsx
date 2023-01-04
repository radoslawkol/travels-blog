import { render, screen } from "@testing-library/react";

import Home from "@/pages/index";

test("page has correct heading and image", () => {
	render(<Home />);

	const heading = screen.getByRole("heading", {
		name: "WELCOME TO OUR TRAVEL BLOG",
	});

	expect(heading).toBeIntTheDocument();
});
