import React, { FC, ReactElement } from "react";
import { Card, Info } from "./PhotoCard.styled";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion } from "framer-motion";
import { IPhoto } from "@/interfaces/IPhoto";

interface IProps {
	photo: IPhoto;
}

const PhotoCard: FC<IProps> = ({ photo }): ReactElement => {
	return (
		<motion.div layout>
			<Card>
				<LazyLoadImage
					src={photo.photo.asset.url}
					alt={photo.title}
					effect='blur'
				/>
				<Info>
					<span>{photo.date?.split("T")[0]}</span>
					<h3>{photo.title}</h3>
				</Info>
			</Card>
		</motion.div>
	);
};

export default PhotoCard;
