import { useEffect } from "react";
import CategoryButton from "@/components/CategoryButton";
import Head from "next/head";
import React from "react";
import styled from "styled-components";
import PhotoCard from "@/components/PhotoCard";

export default function PhotosPage() {
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
					<CategoryButton category='towns' />
					<CategoryButton category='mountains' />
					<CategoryButton category='seaside' />
					<CategoryButton category='seaside' />
					<CategoryButton category='seaside' />
					<CategoryButton category='seaside' />
					<CategoryButton category='seaside' />
				</Container>
				<Cards>
					<PhotoCard />
					<PhotoCard />
					<PhotoCard />
					<PhotoCard />
					<PhotoCard />
					<PhotoCard />
					<PhotoCard />
					<PhotoCard />
					<PhotoCard />
					<PhotoCard />
				</Cards>
			</Section>
		</>
	);
}

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
