import { client } from "@/utils/sanityClient";
import { groq } from "next-sanity";

export const usePrevPageArticles = async (
	articles,
	prevId,
	resultsPerPage,
	setPrevId,
	setLastId,
	setResults,
	setCurrentPage
) => {
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
