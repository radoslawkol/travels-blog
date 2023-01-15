import React, { FC, ReactElement } from "react";
import { Container } from "./PostsCategories.styled";

interface IProps {
	categories: object[];
}

const PostsCategories: FC<IProps> = ({ categories }): ReactElement => {
	return (
		<Container>
			{categories.map((category) => (
				<button key={category._id}>{category.category}</button>
			))}
		</Container>
	);
};
export default PostsCategories;
