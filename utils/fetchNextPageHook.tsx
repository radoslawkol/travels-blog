import React from "react";
import { IArticle } from "@/interfaces/IArticle";
import { client } from "@/utils/sanityClient";
import { groq } from "next-sanity";

interface IArguments {
	setPrevId: React.Dispatch<React.SetStateAction<string>>;
	setPrevPages: React.Dispatch<React.SetStateAction<string[]>>;
	results: IArticle[];
	resultsPerPage: number;
	setLastId: React.Dispatch<React.SetStateAction<string>>;
	setResults: React.Dispatch<React.SetStateAction<IArticle[]>>;
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
	lastId: string;
}

export const useNextPageArticles: IArguments = async (
	setPrevId,
	setPrevPages,
	results,
	resultsPerPage,
	setLastId,
	setResults,
	setCurrentPage,
	lastId
) => {
	setPrevId(results[0]._id);

	setPrevPages((prev: []) => {
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

		if (results.length > 0) {
			setLastId(results[results.length - 1]._id);
			setResults(results);
			setCurrentPage((prev: number) => prev + 1);
		} else {
			setLastId(null);
		}
	} catch (err) {
		console.log(err);
	}
};
