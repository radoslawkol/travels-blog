import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme.styled";
import ArticlesPage from "@/pages/articles";
import fakeArticles from "../../../__mocks__/articles";
import fakeCategories from "../../../__mocks__/articleCategories";

jest.mock("react-lazy-load-image-component/src/effects/blur.css", () => {});

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

test("Render Articles Page", async () => {
	render(
		<ThemeProvider theme={theme}>
			<ArticlesPage articles={fakeArticles} categories={fakeCategories} />
		</ThemeProvider>
	);

	const title = screen.getByText(
		/How is it to fly a plane. Flight to New York./i
	);
	const category = screen.getByText("mountains");

	expect(title).toBeInTheDocument();
	expect(category).toBeInTheDocument();
});
