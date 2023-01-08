import React, { FC, ReactElement } from "react";
import AboutInfo from "../AboutInfo";
import Image from "next/image";
import image from "../../images/home-banner.jpg";
import { ContentImage, Section } from "./AboutContent.styled";

const AboutContent: FC = (): ReactElement => {
	return (
		<Section>
			<div className='info'>
				<AboutInfo />
			</div>
			<div className='line'></div>
			<div>
				<div>
					<h2>How does it started?</h2>
					<div className='container-1'>
						<p>
							Lorem ipsum dolor sit amet consectetur. Quam sed dictum sociis
							libero quis elementum imperdiet. Elit ut feugiat mauris malesuada
							quis magna porta volutpat. Faucibus integer ullamcorper a suscipit
							ut sit sed facilisis malesuada. Molestie amet risus mattis iaculis
							urna. Diam quis in a lectus nisi. Commodo eu aliquet lectus ac et
							mi nascetur. Massa amet sed nisi fermentum pellentesque vulputate
							quam non habitant. Vitae blandit commodo sit urna id at massa arcu
							maecenas. Et cursus sed et faucibus maecenas eros sed a.
						</p>
						<ContentImage>
							<Image src={image} alt='forest' />
						</ContentImage>
					</div>
				</div>
				<div>
					<h2>What Gear do you use?</h2>
					<p className='lastParagraph'>
						Lorem ipsum dolor sit amet consectetur. Quam sed dictum sociis
						libero quis elementum imperdiet. Elit ut feugiat mauris malesuada
						quis magna porta volutpat. Faucibus integer ullamcorper a suscipit
						ut sit sed facilisis malesuada. Molestie amet risus mattis iaculis
						urna.
					</p>
				</div>
			</div>
		</Section>
	);
};
export default AboutContent;
