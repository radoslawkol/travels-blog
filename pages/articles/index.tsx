import { FC, ReactElement, useEffect, useState } from "react";
import Head from "next/head";
import React from "react";
import { client } from "@/utils/sanityClient";
import ArticlesContainer from "@/components/ArticlesContainer";
import styled from "styled-components";
import CategoryButton from "@/components/CategoryButton";
import Pagination from "@/components/Pagination";
import { groq } from "next-sanity";

interface IProps {
	articles: { _id: string }[];
	categories: { _id: string; category: string }[];
	total: number;
}
const resultsPerPage = 2;

const ArticlesPage: FC<IProps> = ({
	articles,
	categories,
	total,
}): ReactElement => {
	const [results, setResults] = useState<{ _id: string }[]>(articles);
	const [lastId, setLastId] = useState<string | null>("");
	const [prevId, setPrevId] = useState<string | null>("");
	const [currentPage, setCurrentPage] = useState(0);
	const [lastPage, setLastPage] = useState<number>(0);
	const [prevPages, setPrevPages] = useState([]);
	const [category, setCategory] = useState("");

	useEffect(() => {
		setLastId(articles[articles.length - 1]._id);
		setLastPage(Math.ceil(total / resultsPerPage));
	}, []);

	useEffect(() => {
		console.log(prevPages);
		setPrevId(prevPages[currentPage - 1]);
	}, [prevPages, currentPage]);

	useEffect(() => {
		if (category === "all") {
			setCategory("");
			setResults(articles);
		} else if (category) {
			fetchByCategory(category);
		}
	}, [category]);

	const fetchByCategory = async (category: string) => {
		try {
			const articles =
				await client.fetch(`*[_type == "article" && "${category}" in categories[]->category]{
		_id, title, slug, categories[] -> {
			category
		}, coverImage{
					asset->{
						_id,
						url
							}
						}}`);
			console.log(articles);
			setResults(articles);
		} catch (err) {
			console.log(err);
		}
	};

	const fetchNextPage = async () => {
		setPrevId(results[0]._id);

		setPrevPages((prev) => {
			const isExist = prev.find((id) => id === results[0]._id);
			if (!isExist) {
				return [...prev, results[0]._id];
			}
			return prev;
		});
		try {
			if (lastId === null) {
				return;
			}
			const results = await client.fetch(
				groq`*[_type == "article" && _id > $lastId] | order(_id) [0...${resultsPerPage}]{
                _id, title, slug, coverImage{
					asset->{
						_id,
						url
							}
						}
            }`,
				{ lastId }
			);
			console.log(results);

			if (results.length > 0) {
				setLastId(results[results.length - 1]._id);
				setResults(results);
				setCurrentPage((prev) => prev + 1);
			} else {
				setLastId(null);
			}
		} catch (err) {
			console.log(err);
		}
	};

	const fetchPrevPage = async () => {
		try {
			if (prevId === null || prevId === "") {
				return;
			}

			const results = await client.fetch(
				groq`*[_type == "article" && _id >= $prevId] | order(_id) [0...${resultsPerPage}]{
                _id, title, slug, coverImage{
					asset->{
						_id,
						url
							}
						}
            }`,
				{ prevId }
			);
			console.log(results);

			if (results.length > 0) {
				setPrevId(results[0]._id);
				setLastId(results[results.length - 1]._id);
				setResults(results);
				setCurrentPage((prev) => prev - 1);
			} else {
				setPrevId(null);
				setResults(articles);
			}
		} catch (err) {
			console.log(err);
		}
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
							fetchNextPage={fetchNextPage}
							fetchPrevPage={fetchPrevPage}
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
