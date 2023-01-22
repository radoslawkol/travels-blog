import { render, screen, cleanup } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme.styled";
import fakeArticles from "../../../__mocks__/articles";

jest.mock("@sanity/client", () => {
	return function sanity() {
		return {
			fetch: () => ({
				methodOne: [{}],
				methodTwo: [{}],
			}),
		};
	};
});

import Home from "@/pages/index";

afterEach(cleanup);

test("Renders correct heading", () => {
	render(
		<ThemeProvider theme={theme}>
			<Home articles={fakeArticles} />
		</ThemeProvider>
	);

	const heading = screen.getByRole("heading", {
		name: /WELCOME TO OUR TRAVEL BLOG/i,
	});

	expect(heading).toBeInTheDocument();

	const article1 = screen.getByText(
		"How is it to fly a plane. Flight to New York."
	);

	const article2 = screen.getByText(
		"On boat i nthe mountains with beautiful landscape"
	);

	expect(article1).toBeInTheDocument();
	expect(article2).toBeInTheDocument();
});
