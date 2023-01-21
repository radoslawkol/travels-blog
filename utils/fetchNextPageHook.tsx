import { client } from "@/utils/sanityClient";
import { groq } from "next-sanity";

interface IArguments {
	setPrevId: () => string;
	setPrevPages: () => [];
	results: [];
	resultsPerPage: number;
	setLastId: () => string;
	setResults: () => [];
	setCurrentPage: () => number;
	lastId: string;
}

export const useNextPageArticles = async (
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
