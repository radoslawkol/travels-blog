import React, { FC, ReactElement } from "react";
import Image from "next/image";
import image from "../../images/about-info.jpg";
import { Container } from "./AboutInfo.styled";
import Socials from "@/components/Socials";

const AboutInfo: FC = (): ReactElement => {
	return (
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
					I am John Smith. I am a traveller since I remember. Lorem ipsum dolor
					sit amet consectetur. Suspendisse adipiscing massa lectus tristique
					elit egestas posuere felis convallis. Auctor at non adipiscing amet
					mollis scelerisque. Tristique risus nulla commodo id duis.
				</p>
				<Socials color={({ theme }) => theme.colors.darkBrown} />
			</div>
		</Container>
	);
};
export default AboutInfo;
