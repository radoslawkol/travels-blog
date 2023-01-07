import { render, screen, cleanup } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme.styled";

import Home from "@/pages/index";

afterEach(cleanup);

test("Renders correct heading", () => {
	render(
		<ThemeProvider theme={theme}>
			<Home />
		</ThemeProvider>
	);

	const heading = screen.getByRole("heading", {
		name: /Welcome to our /i,
	});

	expect(heading).toBeInTheDocument();
});
