import React, { FC, ReactElement } from "react";
import { Section, Container } from "./LatestPosts.styled";
import Post from "./Post";
import { motion } from "framer-motion";
import { IArticleWithSlug } from "@/interfaces/IArticle";

interface IProps {
	articles: IArticleWithSlug[];
}

const LatestPosts: FC<IProps> = ({ articles }): ReactElement => {
	return (
		<Section>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
			>
				<Container>
					{articles?.slice(0, 3).map((article, i) => (
						<Post key={article._id} article={article} />
					))}
				</Container>
			</motion.div>
		</Section>
	);
};
export default LatestPosts;
