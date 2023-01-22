import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme.styled";
import ArticlePage from "@/pages/articles/[slug]";
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

test("Render Article Page ", async () => {
	render(
		<ThemeProvider theme={theme}>
			<ArticlePage article={fakeArticles[0]} />
		</ThemeProvider>
	);

	const heading = screen.getByRole("heading");
	expect(heading).toBeInTheDocument();
	expect(heading).toHaveTextContent(
		"How is it to fly a plane. Flight to New York."
	);
});
