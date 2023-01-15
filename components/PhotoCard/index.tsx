import React, { FC, ReactElement } from "react";
import { Card, Info } from "./PhotoCard.styled";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface Props {
	photo: object;
}

const PhotoCard: FC<Props> = ({ photo }): ReactElement => {
	return (
		<Card>
			<LazyLoadImage
				src={photo.photo.asset.url}
				alt={photo.title}
				effect='blur'
			/>
			<Info>
				<span>{photo.date}</span>
				<h3>{photo.title}</h3>
			</Info>
		</Card>
	);
};

export default PhotoCard;
