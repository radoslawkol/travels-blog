import { FC, ReactElement } from "react";
import Head from "next/head";
import React from "react";
import { client } from "@/utils/sanityClient";
import ArticlesContainer from "@/components/ArticlesContainer";
import styled from "styled-components";
import CategoryButton from "@/components/CategoryButton";

interface IProps {
	articles: { _id: string }[];
	categories: { _id: string; category: string }[];
}

const ArticlesPage: FC<IProps> = ({ articles, categories }): ReactElement => {
	return (
		<>
			<Head>
				<title>Travels Blog: Articles about travels all over the world.</title>
			</Head>
			<Section>
				<aside>
					{categories.map((category) => (
						<CategoryButton key={category._id} category={category.category} />
					))}
				</aside>
				<div>
					<ArticlesContainer articles={articles} />
					{/* pagination component */}
				</div>
			</Section>
		</>
	);
};

export const getStaticProps = async () => {
	const articles = await client.fetch(`*[_type == "article"]{
		title, slug, coverImage{
			asset->{
				_id,
				url
			}
		}
	}`);

	const categories = await client.fetch(`*[_type == 'category']`);
	return {
		props: {
			articles,
			categories,
		},
	};
};

export default ArticlesPage;

const Section = styled.section`
	min-height: 100vh;
	padding: 100px 20px;
	@media (min-width: ${({ theme }) => theme.breakpoints.xxxLarge}) {
		padding: 140px 20px;
		display: flex;
		align-items: flex-start;
		gap: 40px;
	}

	aside {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 10px;
		order: 1;
	}

	div {
		order: 0;
	}
`;
