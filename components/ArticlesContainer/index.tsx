import React, { FC, ReactElement } from "react";
import ArticleCard from "../ArticleCard";
import { Container } from "./ArticlesContainer.styled";
import { motion } from "framer-motion";
import { IArticleWithSlug } from "@/interfaces/IArticle";

interface IProps {
	articles: IArticleWithSlug[];
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
