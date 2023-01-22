import Head from "next/head";
import type { NextPage } from "next";
import Home from "@/components/Home";
import { client } from "@/utils/sanityClient";
import { useTheme } from "styled-components";
import { useSetBodyBackground } from "@/utils/setBodyBackgroundHook";
import { IArticle } from "@/interfaces/IArticle";
// interface IProps {
// 	articles: {
// 		title: string;
// 		_id: string;
// 		slug: string;
// 		coverImage: {
// 			asset: {
// 				_id: string;
// 				url: string;
// 			};
// 		};
// 	}[];
// }
interface IProps {
	articles: IArticle[];
}

const HomePage: NextPage<IProps> = ({ articles }) => {
	const theme = useTheme();

	useSetBodyBackground({ color: theme.colors.bgPrimary });

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
