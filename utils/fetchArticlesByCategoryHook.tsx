import { client } from "./sanityClient";
import { useEffect } from "react";

export const useFetchArticlesByCategory = async (
	category: string,
	articles: [],
	setResults: () => [],
	setCategory: () => string
) => {
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
			setResults(articles);
		} catch (err) {
			console.log(err);
		}
	};
};
