import React, { FC, ReactElement } from "react";
import { Container } from "./Posts.styled";
import Post from "../Post";

interface IProps {
	articles: object[];
}

const Posts: FC<IProps> = ({ articles }): ReactElement => {
	return (
		<Container>
			{articles.slice(0, 3).map((article) => (
				<Post key={article._id} article={article} />
			))}
		</Container>
	);
};
export default Posts;
