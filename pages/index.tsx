import { useEffect } from "react";
import Head from "next/head";
import type { NextPage } from "next";
import Home from "@/components/Home";
import { client } from "@/utils/sanityClient";

interface IProps {
	articles: object[];
	categories: object[];
}

const HomePage: NextPage<IProps> = ({ articles, categories }) => {
	useEffect(() => {
		document.body.style.background = "#F8F8F8";
	}, []);
	return (
		<>
			<Head>
				<title>Travels Blog: John Smith</title>
			</Head>
			<Home articles={articles} categories={categories} />
		</>
	);
};

export default HomePage;

export const getStaticProps = async () => {
	const articles = await client.fetch(`*[_type == "article"]{
		title, slug, coverImage{
			asset->{
				_id,
				url
			}
		}
	}`);
	const categories = await client.fetch(`*[_type == "category"]`);

	return {
		props: {
			articles,
			categories,
		},
	};
};
