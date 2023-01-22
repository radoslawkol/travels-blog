import React, { FC, ReactElement } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Article } from "./ArticleCard.styled";
import Link from "next/link";
import { IArticleWithSlug } from "@/interfaces/IArticle";

interface IProps {
	article: IArticleWithSlug;
}

const ArticleCard: FC<IProps> = ({ article }): ReactElement => {
	return (
		<Article>
			<LazyLoadImage
				src={article.coverImage.asset.url}
				alt={article.title}
				effect='blur'
			/>

			<div className='content'>
				<h3>{article.title}</h3>
				<button>
					<Link href={`/articles/${article.slug.current}`}>Read more</Link>
				</button>
			</div>
		</Article>
	);
};

export default ArticleCard;
