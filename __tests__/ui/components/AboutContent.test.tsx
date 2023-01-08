import { render, screen, cleanup } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme.styled";

import AboutContent from "@/components/AboutContent";

afterEach(cleanup);

test("Renders AboutContent", () => {
	render(
		<ThemeProvider theme={theme}>
			<AboutContent />
		</ThemeProvider>
	);

	const heading = screen.getByRole("heading", {
		name: /about me/i,
	});

	const subHeading = screen.getByRole("heading", {
		name: /HOW DOES IT STARTED?/i,
	});

	const image = screen.getByRole("img", { name: "forest" });

	expect(heading).toBeInTheDocument();
	expect(subHeading).toBeInTheDocument();
	expect(image).toBeInTheDocument();
});
