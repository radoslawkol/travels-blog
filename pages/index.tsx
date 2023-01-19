import { useContext, useEffect } from "react";
import Head from "next/head";
import type { NextPage } from "next";
import Home from "@/components/Home";
import { client } from "@/utils/sanityClient";
import { ThemeContext } from "./_app";
import { useTheme } from "styled-components";

interface IProps {
	articles: object[];
	categories: object[];
}

const HomePage: NextPage<IProps> = ({ articles, categories }) => {
	const theme = useTheme();
	const [darkMode, setDarkMode] = useContext(ThemeContext);

	useEffect(() => {
		console.log(darkMode);
		if (darkMode) {
			document.body.style.background = theme.colors.darkPrimary;
		} else {
			document.body.style.background = theme.colors.bgPrimary;
		}
		document.body.style.background = theme.colors.bgPrimary;
	}, [darkMode, theme.colors.darkPrimary]);
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
	const articles =
		await client.fetch(`*[_type == "article"] | order(dateTime(date) desc){
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
