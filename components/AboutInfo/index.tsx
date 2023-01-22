import React, { FC, ReactElement } from "react";
import Image from "next/image";
import image from "../../images/about-info.jpg";
import { Container } from "./AboutInfo.styled";
import Socials from "@/components/Socials";
import { motion } from "framer-motion";
import { useTheme } from "styled-components";

const AboutInfo: FC = (): ReactElement => {
	const theme = useTheme();
	return (
		<motion.div
			initial={{ opacity: 0, x: -200 }}
			whileInView={{ opacity: 1, x: 0 }}
		>
			<Container>
				<Image
					src={image}
					width={150}
					height={150}
					alt='Traveler in the mountains'
				/>
				<div>
					<h2>About Me</h2>
					<i>John Smith</i>
					<p>
						I am John Smith. I am a traveller since I remember. Lorem ipsum
						dolor sit amet consectetur. Suspendisse adipiscing massa lectus
						tristique elit egestas posuere felis convallis. Auctor at non
						adipiscing amet mollis scelerisque. Tristique risus nulla commodo id
						duis.
					</p>
					<Socials color={theme.colors.darkBrown} />
				</div>
			</Container>
		</motion.div>
	);
};
export default AboutInfo;
