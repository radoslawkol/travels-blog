import { render, screen, cleanup } from "@testing-library/react";
import Socials from "@/components/Socials";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme.styled";

afterEach(cleanup);

test("Render Socials", () => {
	render(
		<ThemeProvider theme={theme}>
			<Socials />
		</ThemeProvider>
	);

	const socialsLinks = screen.getAllByRole("link");

	expect(socialsLinks).toHaveLength(2);
	expect(socialsLinks[0]).toHaveAttribute("href", "https://pl.pinterest.com/");
	expect(socialsLinks[1]).toHaveAttribute("href", "https://www.instagram.com/");
});
