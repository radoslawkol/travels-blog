import React, { FC, ReactElement } from "react";
import {
	Wrapper,
	BgShadow,
	Rectangle,
	CentralContainer,
	Heading,
	Text,
} from "./Header.styled";
import image from "../../../images/header-home-image.jpg";
import Logo from "@/components/Logo";

const Header: FC = (): ReactElement => {
	return (
		<Wrapper image={image}>
			<BgShadow />
			<CentralContainer>
				<Logo />
				<Heading>
					<Rectangle />
					<p>Welcome to our travel blog</p>
				</Heading>
			</CentralContainer>
			<Text>
				We create inspiring blog about the world’s most beautiful places
			</Text>
		</Wrapper>
	);
};

export default Header;
