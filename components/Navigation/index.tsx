import React, { FC, ReactElement } from "react";
import Logo from "@/components/Logo";
import { Nav } from "./Navigation.styled";

const Navigation: FC = (): ReactElement => {
	return (
		<Nav>
			<Logo />
		</Nav>
	);
};

export default Navigation;
