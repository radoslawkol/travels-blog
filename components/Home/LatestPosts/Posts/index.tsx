import React, { FC, ReactElement } from "react";
import { Container } from "./Posts.styled";
import Post from "../Post";
import { motion } from "framer-motion";

interface IProps {
	articles: { _id: string }[];
}

const Posts: FC<IProps> = ({ articles }): ReactElement => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
		>
			<Container>
				{articles.slice(0, 3).map((article) => (
					<Post key={article._id} article={article} />
				))}
			</Container>
		</motion.div>
	);
};
export default Posts;
