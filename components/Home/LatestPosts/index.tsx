import React, { FC, ReactElement } from "react";
import { Section } from "./LatestPosts.styled";
import PostsCategories from "./PostsCategories";
import Posts from "./Posts";

const LatestPosts: FC = (): ReactElement => {
	return (
		<Section>
			<PostsCategories />
			<Posts />
		</Section>
	);
};
export default LatestPosts;
