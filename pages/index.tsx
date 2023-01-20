import { useContext, useEffect } from "react";
import Head from "next/head";
import type { NextPage } from "next";
import Home from "@/components/Home";
import { client } from "@/utils/sanityClient";
import { ThemeContext } from "./_app";
import { useTheme } from "styled-components";

interface IProps {
	articles: object[];
}

const HomePage: NextPage<IProps> = ({ articles }) => {
	const theme = useTheme();
	const [darkMode, setDarkMode] = useContext(ThemeContext);

	useEffect(() => {
		document.body.style.background = theme.colors.bgPrimary;
	}, [darkMode, theme.colors.darkPrimary]);
	return (
		<>
			<Head>
				<title>Travels Blog: John Smith</title>
			</Head>
			<Home articles={articles} />
		</>
	);
};

export default HomePage;

export const getStaticProps = async () => {
	const articles =
		await client.fetch(`*[_type == "article"] | order(dateTime(date) desc){
		_id, title, slug, coverImage{
			asset->{
				_id,
				url
			}
		}
	}`);

	return {
		props: {
			articles,
		},
	};
};
