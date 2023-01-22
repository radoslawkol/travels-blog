import React, { FC, ReactElement } from "react";
import { Section } from "./Banner.styled";
import image from "../../../images/home-banner.jpg";
import NewsletterForm from "@/components/NewsletterForm";

const Banner: FC = (): ReactElement => {
	return (
		<Section image={image}>
			<h2>Perfect Travels With Us</h2>
			<p>
				Go on a dream travel with us and contribute to our work. Send us an
				email and we can go on a trip together.
			</p>
			<q>The world is a book and those who do not travel read only one page.</q>

			<NewsletterForm />
		</Section>
	);
};
export default Banner;
