import React, { FC, ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPinterestP, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Container } from "./Socials.styled";

type Props = {
	color?: string;
};

const Socials: FC<Props> = (props): ReactElement => {
	return (
		<Container color={props.color}>
			<a href='https://pl.pinterest.com/' target='_blank' rel='noreferrer'>
				<FontAwesomeIcon icon={faPinterestP} />
			</a>
			<a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
				<FontAwesomeIcon icon={faInstagram} />
			</a>
		</Container>
	);
};

export default Socials;
