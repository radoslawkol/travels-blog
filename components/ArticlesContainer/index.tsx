import React, { FC, ReactElement } from "react";
import ArticleCard from "../ArticleCard";
import { Container } from "./ArticlesContainer.styled";

interface IProps {
	articles: { _id: string }[];
}

const ArticlesContainer: FC<IProps> = ({ articles }): ReactElement => {
	return (
		<Container>
			{articles.map((article) => (
				<ArticleCard article={article} key={article._id} />
			))}
		</Container>
	);
};

export default ArticlesContainer;
