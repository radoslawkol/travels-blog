import { useEffect, FC, ReactElement, useState } from "react";
import CategoryButton from "@/components/CategoryButton";
import Head from "next/head";
import React from "react";
import styled from "styled-components";
import PhotoCard from "@/components/PhotoCard";
import { client } from "@/utils/sanityClient";
import { motion } from "framer-motion";
import { useSetBodyBackground } from "@/utils/setBodyBackgroundHook";
import { useTheme } from "styled-components";

interface IProps {
	photos: { _id: string; categories: [] }[];
	categories: { _id: string; category: string }[];
}

export const PhotosPage: FC<IProps> = ({
	photos,
	categories,
}): ReactElement => {
	const theme = useTheme();
	const [results, setResults] = useState(photos);
	const [category, setCategory] = useState("all");

	useSetBodyBackground({ color: theme.colors.bgLightBrown });

	const fetchByCategory = (category: string) => {
		if (category !== "all") {
			const filteredPhotos = photos.filter((photo) => {
				return photo.categories.includes(category);
			});
			setResults(filteredPhotos);
		} else {
			setResults(photos);
		}
	};

	useEffect(() => {
		fetchByCategory(category);
	}, [category]);

	return (
		<>
			<Head>
				<title>Travels Blog: All Photos I have taken so far.</title>
			</Head>
			<Section>
				<Container>
					<div onClick={() => setCategory("all")}>
						<CategoryButton category='all' />
					</div>
					{categories.map((category) => (
						<div
							key={category._id}
							onClick={() => setCategory(category.category)}
						>
							<CategoryButton category={category.category} />
						</div>
					))}
				</Container>
				<motion.div layout animate={{ y: 60 }}>
					<Cards>
						{results.map((photo) => (
							<PhotoCard key={photo._id} photo={photo} />
						))}
					</Cards>
				</motion.div>
			</Section>
		</>
	);
};

export const getStaticProps = async () => {
	const photos =
		await client.fetch(`*[_type == "photo"] | order(dateTime(date) desc){
		title, date, "categories": categories[
        ]->category
        
		 , photo{
			asset->{
				_id,
				url
			}
		}
	}`);
	const categories = await client.fetch(`*[_type == "photoCategory"]{
		category
	}`);

	return {
		props: {
			photos,
			categories,
		},
	};
};

const Section = styled.section`
	padding: 100px 20px;
	min-height: 100vh;
	@media (min-width: ${({ theme }) => theme.breakpoints.xxLarge}) {
		width: 80%;
		margin: 0 auto;
	}
`;

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 20px 10px;
	margin-bottom: 80px;
`;

const Cards = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 60px;
	@media (min-width: ${({ theme }) => theme.breakpoints.small}) {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	}
`;

export default PhotosPage;
