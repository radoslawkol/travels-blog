import { FC, ReactElement, useEffect, useState } from "react";
import Head from "next/head";
import React from "react";
import { client } from "@/utils/sanityClient";
import ArticlesContainer from "@/components/ArticlesContainer";
import styled from "styled-components";
import CategoryButton from "@/components/CategoryButton";
import Pagination from "@/components/Pagination";
import { useTheme } from "styled-components";
import { useFetchArticlesByCategory } from "@/utils/fetchArticlesByCategoryHook";
import { useSetBodyBackground } from "@/utils/setBodyBackgroundHook";
import { nextPageArticles } from "@/utils/fetchNextPageHook";
import { prevPageArticles } from "@/utils/fetchPrevPageHook";
import { IArticleWithSlug } from "@/interfaces/IArticle";
import { IArticleCategory } from "@/interfaces/IArticleCategory";

interface IProps {
	articles: IArticleWithSlug[];
	categories: IArticleCategory[];
	total: number;
}
const resultsPerPage = 8;

const ArticlesPage: FC<IProps> = ({
	articles,
	categories,
	total,
}): ReactElement => {
	const theme = useTheme();
	const [results, setResults] = useState(articles);
	const [lastId, setLastId] = useState<string | null>("");
	const [prevId, setPrevId] = useState<string | null>("");
	const [currentPage, setCurrentPage] = useState(0);
	const [lastPage, setLastPage] = useState<number>(0);
	const [prevPages, setPrevPages] = useState([]);
	const [category, setCategory] = useState("");

	useSetBodyBackground({ color: theme.colors.bgPrimary });
	useFetchArticlesByCategory(category, articles, setResults, setCategory);

	useEffect(() => {
		setLastId(articles[articles.length - 1]._id);
		setLastPage(Math.ceil(total / resultsPerPage));
	}, []);

	useEffect(() => {
		setPrevId(prevPages[currentPage - 1]);
	}, [prevPages, currentPage]);

	const nextPageHandler = () => {
		nextPageArticles(
			setPrevId,
			setPrevPages,
			results,
			resultsPerPage,
			setLastId,
			setResults,
			setCurrentPage,
			lastId
		);
	};

	const prevPageHander = () => {
		prevPageArticles(
			articles,
			prevId,
			resultsPerPage,
			setPrevId,
			setLastId,
			setResults,
			setCurrentPage
		);
	};
	return (
		<>
			<Head>
				<title>Travels Blog: Articles about travels all over the world.</title>
			</Head>
			<Section>
				<aside>
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
				</aside>
				<div className='leftWrapper'>
					<ArticlesContainer articles={results} />
					{!category && (
						<Pagination
							fetchNextPage={nextPageHandler}
							fetchPrevPage={prevPageHander}
							currentPage={currentPage}
							lastPage={lastPage}
						/>
					)}
				</div>
			</Section>
		</>
	);
};

export const getStaticProps = async () => {
	const articles = await client.fetch(`{
			"items": *[_type == "article"] | order(_id) [0...${resultsPerPage}]{
                _id, title, slug, coverImage{
					asset->{
						_id,
						url
							}
						}
	},
			"total": count(*[_type == "article"]) 
}`);

	const categories = await client.fetch(`*[_type == 'category']`);
	return {
		props: {
			articles: articles.items,
			categories,
			total: articles.total,
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

	div.leftWrapper {
		order: 0;
		display: flex;
		flex-direction: column;
	}
`;
