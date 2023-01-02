import React, { FC, ReactElement } from "react";
import { Container } from "./Posts.styled";
import Post from "../Post";

const Posts: FC = (): ReactElement => {
	return (
		<Container>
			<Post />
			<Post />
			<Post />
		</Container>
	);
};
export default Posts;
