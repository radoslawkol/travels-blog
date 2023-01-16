import React, { FC, ReactElement } from "react";
import { Section } from "./LatestPosts.styled";
import PostsCategories from "./PostsCategories";
import Posts from "./Posts";

interface IProps {
	articles: object[];
	categories: object[];
}

const LatestPosts: FC<IProps> = ({ articles, categories }): ReactElement => {
	return (
		<Section>
			{/* <PostsCategories categories={categories} /> */}
			<Posts articles={articles} />
		</Section>
	);
};
export default LatestPosts;
