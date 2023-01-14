import React, { FC, ReactElement } from "react";
import { Container } from "./Posts.styled";
import Post from "../Post";

interface Props {
	articles: object[];
}

const Posts: FC<Props> = ({ articles }): ReactElement => {
	return (
		<Container>
			{articles.map((article) => (
				<Post key={article._id} article={article} />
			))}
		</Container>
	);
};
export default Posts;
