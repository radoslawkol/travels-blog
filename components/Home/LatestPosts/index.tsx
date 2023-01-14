import React, { FC, ReactElement } from "react";
import { Section } from "./LatestPosts.styled";
import PostsCategories from "./PostsCategories";
import Posts from "./Posts";

interface Props {
	articles: object[];
	categories: object[];
}

const LatestPosts: FC<Props> = ({ articles, categories }): ReactElement => {
	return (
		<Section>
			<PostsCategories categories={categories} />
			<Posts articles={articles} />
		</Section>
	);
};
export default LatestPosts;
