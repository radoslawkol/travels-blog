import { cleanup, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme.styled";
import ModeToggle from "@/components/Navigation/ModeToggle";
import userEvent from "@testing-library/user-event";
import { ThemeContext } from "@/pages/_app";

afterEach(cleanup);

describe("ModeToggle", () => {
	beforeEach(() => {
		const darkMode = false;
		const setDarkMode = () => true;
		render(
			<ThemeContext.Provider value={[darkMode, setDarkMode]}>
				<ThemeProvider theme={theme}>
					<ModeToggle />
				</ThemeProvider>
			</ThemeContext.Provider>
		);
	});
	test("Render ModeToggle", () => {
		const input = screen.getByLabelText("theme-mode-input");
		expect(input).toBeInTheDocument();

		const label = screen.getByLabelText("theme-mode-label");
		expect(label).toBeInTheDocument();
	});
	test("Check input when is clicked ", async () => {
		const input = screen.getByLabelText("theme-mode-input");
		const label = screen.getByLabelText("theme-mode-label");

		expect(input).toBeInTheDocument();
		expect(label).toBeInTheDocument();
		expect(label).toHaveStyle("background: rgb(255,255,255)");

		await userEvent.click(input);
		expect(input).toBeChecked();
	});
});
