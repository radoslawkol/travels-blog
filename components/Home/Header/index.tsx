import React, { FC, ReactElement } from "react";
import {
	Wrapper,
	BgShadow,
	Rectangle,
	CentralContainer,
	Heading,
	Text,
	ArrowDownIcon,
} from "./Header.styled";
import image from "../../../images/header-home-image.jpg";
import Logo from "@/components/Logo";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Header: FC = (): ReactElement => {
	const scrollDownHandler = () => {
		const top: HTMLElement | null = document.getElementById("BannerComponent");

		window.scrollTo({ top: top?.offsetTop, behavior: "smooth" });
	};

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
				<p>We create inspiring blog about the world’s most beautiful places</p>

				<ArrowDownIcon icon={faAngleDown} onClick={scrollDownHandler} />
			</Text>
		</Wrapper>
	);
};

export default Header;
