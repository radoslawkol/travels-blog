import React, { FC, ReactElement } from "react";
import Image from "next/image";
import { Card } from "./Post.styled";
import { IArticleWithSlug } from "@/interfaces/IArticle";

interface IProps {
	article: IArticleWithSlug;
}

const Post: FC<IProps> = ({ article }): ReactElement => {
	return (
		<Card href={`/articles/${article.slug.current}`}>
			<div>
				<Image src={article.coverImage.asset.url} fill alt={article.title} />
			</div>
			<p>{article.title}</p>
		</Card>
	);
};
export default Post;
