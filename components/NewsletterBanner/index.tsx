import React, { FC, ReactElement } from "react";
import NewsletterForm from "../NewsletterForm";
import { Container } from "./NewsletterBanner.styled";

const NewsletterBanner: FC = (): ReactElement => {
	return (
		<Container id='BannerComponent'>
			<h3>The Travel</h3>

			<p>Get inspired! Receive additional travel tips.</p>
			<NewsletterForm />
		</Container>
	);
};

export default NewsletterBanner;
