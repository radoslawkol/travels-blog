import React, { FC, ReactElement } from "react";
import { Container } from "./NewsletterForm.styled";

const NewsletterForm: FC = (): ReactElement => {
	return (
		<Container>
			<input type='email' placeholder='Your email address' />
			<button>Subscribe</button>
		</Container>
	);
};

export default NewsletterForm;
