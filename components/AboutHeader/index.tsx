import React, { FC, ReactElement } from "react";
import headerImageSmall from "../../images/about-header-small.jpg";
import headerImageLarge from "../../images/about-header-large.jpg";
import { Header } from "./AboutHeader.styled";

const AboutHeader: FC = (): ReactElement => {
	return (
		<Header
			headerImageSmall={headerImageSmall}
			headerImageLarge={headerImageLarge}
		>
			<h1>Remember that happiness is a way of travel, not a destination.</h1>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
				<title>Wave</title>
				<path
					fill='#DBD0C7'
					fill-opacity='1'
					d='M0,256L120,229.3C240,203,480,149,720,154.7C960,160,1200,224,1320,256L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z'
				></path>
			</svg>
		</Header>
	);
};
export default AboutHeader;
