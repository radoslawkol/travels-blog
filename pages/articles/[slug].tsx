import React, { FC, ReactElement, useEffect } from "react";
import Head from "next/head";
import styled from "styled-components";
import { useTheme } from "styled-components";
import Article from "@/components/Article";
import { client } from "@/utils/sanityClient";
import { useSetBodyBackground } from "@/utils/setBodyBackgroundHook";

interface IProps {
	article: {
		title: string;
	};
}

const ArticlePage: FC<IProps> = ({ article }): ReactElement => {
	const theme = useTheme();

	useSetBodyBackground({ color: theme.colors.bgLightBrown });

	return (
		<>
			<Head>
				<title>Travels Blog: {article.title}</title>
			</Head>
			<Section>
				<Article article={article} />
			</Section>
		</>
	);
};

export default ArticlePage;

interface IArticle {
	slug: { current: string };
}

export const getStaticPaths = async () => {
	try {
		const articles = await client.fetch(`*[_type == "article"]{
				slug
			}`);

		const paths = articles.map((article: IArticle) => {
			return { params: { slug: article.slug.current } };
		});

		return {
			paths,
			fallback: false,
		};
	} catch (err) {
		console.log(err);
	}
};

export const getStaticProps = async (context: { params: { slug: string } }) => {
	try {
		const { slug } = context.params;

		const article = await client.fetch(`
			*[_type == "article" && slug.current == "${slug}"][0] {
                _id, title, slug, content[]{
					..., _type == "image" => {
						..., asset->
					}
				}, categories[]->, date, author->, coverImage{
					asset->{
						_id,
						url
							}
								}
	}
`);

		return {
			props: {
				article,
			},
		};
	} catch (err) {
		console.log(err);
	}
};

const Section = styled.section`
	min-height: 100vh;
	padding: 60px 0;
`;
