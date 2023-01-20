import React, { FC, ReactElement, useContext } from "react";
import { Label, Input, Container } from "./ModeToggle.styled";
import { ThemeContext } from "@/pages/_app";

const ModeToggle: FC = (): ReactElement => {
	const [darkMode, setDarkMode] = useContext(ThemeContext);

	return (
		<Container>
			<Input
				type='checkbox'
				id='darkModeToggle'
				aria-label='theme-mode-input'
				onChange={() => setDarkMode((prev: boolean) => !prev)}
			/>
			<Label htmlFor='darkModeToggle' aria-label='theme-mode-label'></Label>
		</Container>
	);
};

export default ModeToggle;
