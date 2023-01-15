import { useEffect, FC, ReactElement } from "react";
import CategoryButton from "@/components/CategoryButton";
import Head from "next/head";
import React from "react";
import styled from "styled-components";
import PhotoCard from "@/components/PhotoCard";
import { createClient } from "next-sanity";

interface Props {
	photos: { _id: string }[];
	categories: { _id: string; category: string }[];
}

const client = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
	useCdn: true,
});

export const PhotosPage: FC<Props> = ({ photos, categories }): ReactElement => {
	useEffect(() => {
		document.body.style.background =
			"linear-gradient(180deg, #c6b2a3ba 0%, rgba(237, 229, 222, 0.91) 40%)";
	}, []);
	return (
		<>
			<Head>
				<title>Travels Blog: All Photos I have taken so far.</title>
			</Head>
			<Section>
				<Container>
					{categories.map((category) => (
						<CategoryButton category={category.category} key={category._id} />
					))}
				</Container>
				<Cards>
					{photos.map((photo) => (
						<PhotoCard key={photo._id} photo={photo} />
					))}
				</Cards>
			</Section>
		</>
	);
};

export const getStaticProps = async () => {
	const photos = await client.fetch(`*[_type == "photo"]{
		title, date, photo{
			asset->{
				_id,
				url
			}
		}
	}`);
	const categories = await client.fetch(`*[_type == "category"]`);

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
