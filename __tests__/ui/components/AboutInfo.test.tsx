import { render, screen, cleanup } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme.styled";

import AboutInfo from "@/components/AboutInfo";

afterEach(cleanup);

test("Renders AboutInfo", () => {
	render(
		<ThemeProvider theme={theme}>
			<AboutInfo />
		</ThemeProvider>
	);

	const heading = screen.getByRole("heading", {
		name: /about me/i,
	});
	expect(heading).toBeInTheDocument();

	const image = screen.getByRole("img", { name: /Traveler in the mountains/i });
	expect(image).toBeInTheDocument();

	const socialsLinks = screen.getAllByRole("link");
	expect(socialsLinks).toHaveLength(2);
	expect(socialsLinks[0]).toHaveAttribute("href", "https://pl.pinterest.com/");
	expect(socialsLinks[1]).toHaveAttribute("href", "https://www.instagram.com/");
});
