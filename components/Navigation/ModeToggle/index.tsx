import React, { FC, ReactElement } from "react";
import { Label, Input, Container } from "./ModeToggle.styled";

const ModeToggle: FC = (): ReactElement => {
	return (
		<Container>
			<Input type='checkbox' id='darkModeToggle' />
			<Label htmlFor='darkModeToggle'></Label>
		</Container>
	);
};

export default ModeToggle;
