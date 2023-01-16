import React, { FC, ReactElement } from "react";
import ArticleCard from "../ArticleCard";
import { Container } from "./ArticlesContainer.styled";
import { motion } from "framer-motion";

interface IProps {
	articles: { _id: string }[];
}

const ArticlesContainer: FC<IProps> = ({ articles }): ReactElement => {
	return (
		<motion.div animate={{ y: 40 }}>
			<Container>
				{articles.map((article) => (
					<ArticleCard article={article} key={article._id} />
				))}
			</Container>
		</motion.div>
	);
};

export default ArticlesContainer;
