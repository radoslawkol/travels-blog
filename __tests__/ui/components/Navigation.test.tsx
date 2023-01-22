import { render, screen, cleanup } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme.styled";

import Navigation from "@/components/Navigation";

afterEach(cleanup);

describe("Navigation", () => {
	render(
		<ThemeProvider theme={theme}>
			<Navigation />
		</ThemeProvider>
	);

	test("Renders Navigation Component", () => {
		const companyName = screen.getByText(/JTravel/i);
		const homeLink = screen.getByText(/home/i);
		const aboutLink = screen.getByText(/about/i);
		const articleLink = screen.getByText(/articles/i);
		const photosLink = screen.getByText(/photos/i);

		expect(companyName).toBeInTheDocument();
		expect(homeLink).toBeInTheDocument();
		expect(aboutLink).toBeInTheDocument();
		expect(articleLink).toBeInTheDocument();
		expect(photosLink).toBeInTheDocument();
	});
});
