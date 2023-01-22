import { render, screen, cleanup } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme.styled";
import "../../../__mocks__/matchMedia";
import AboutPage from "@/pages/about";

afterEach(cleanup);

test("Renders page", () => {
	render(
		<ThemeProvider theme={theme}>
			<AboutPage />
		</ThemeProvider>
	);

	const heading = screen.getByRole("heading", {
		name: /Remember that happiness is a way of travel, not a destination./i,
	});

	expect(heading).toBeInTheDocument();
});
