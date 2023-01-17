import React, { FC, ReactElement } from "react";
import headerImageSmall from "../../images/about-header-small.jpg";
import headerImageLarge from "../../images/about-header-large.jpg";
import { Header } from "./AboutHeader.styled";
import { motion } from "framer-motion";
import { useTheme } from "styled-components";

const AboutHeader: FC = (): ReactElement => {
	const theme = useTheme();
	return (
		<Header
			headerImageSmall={headerImageSmall}
			headerImageLarge={headerImageLarge}
		>
			<motion.h1
				initial={{ opacity: 0, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
			>
				Remember that happiness is a way of travel, not a destination.
			</motion.h1>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
				<title>Wave</title>
				<path
					fill={theme.colors.bgLightBrown}
					fill-opacity='1'
					d='M0,256L120,229.3C240,203,480,149,720,154.7C960,160,1200,224,1320,256L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z'
				></path>
			</svg>
		</Header>
	);
};
export default AboutHeader;
