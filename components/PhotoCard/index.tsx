import React, { FC, ReactElement } from "react";
import { Card, Info } from "./PhotoCard.styled";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const PhotoCard: FC = (): ReactElement => {
	return (
		<Card>
			<LazyLoadImage
				alt='photo'
				src={`https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80`}
				effect='blur'
			/>
			<Info>
				<span>04.03.2022</span>
				<h3>Beautiful seaside in Croatia. Sunbathing and swimming.</h3>
			</Info>
		</Card>
	);
};

export default PhotoCard;
