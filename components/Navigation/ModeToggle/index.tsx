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
				onChange={() => setDarkMode((prev: boolean) => !prev)}
			/>
			<Label htmlFor='darkModeToggle'></Label>
		</Container>
	);
};

export default ModeToggle;
