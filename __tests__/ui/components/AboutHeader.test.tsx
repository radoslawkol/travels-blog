import { render, screen, cleanup } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme.styled";

import AboutHeader from "@/components/AboutHeader";

afterEach(cleanup);

test("Renders AboutHeader", () => {
	render(
		<ThemeProvider theme={theme}>
			<AboutHeader />
		</ThemeProvider>
	);

	const heading = screen.getByRole("heading", {
		name: "Remember that happiness is a way of travel, not a destination.",
	});

	const wave = screen.getByTitle(/wave/i);

	expect(heading).toBeInTheDocument();
	expect(wave).toBeInTheDocument();
});
