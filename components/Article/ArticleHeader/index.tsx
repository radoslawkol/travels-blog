import { FC, ReactElement } from "react";
import Image from "next/image";
import { Header, Info } from "./ArticleHeader.styled";
import { IArticle } from "@/interfaces/IArticle";

interface IProps {
	article: IArticle;
}

const ArticleHeader: FC<IProps> = ({ article }): ReactElement => {
	const date = article.date?.split("T")[0];
	return (
		<Header>
			<div className='image'>
				<Image src={article.coverImage.asset.url} fill alt={article.title} />
			</div>
			<Info>
				<span>
					Posted on {date} by {article.author?.name}
				</span>
				<h1>{article.title}</h1>
				<ul>
					{article.categories?.map((cat, i) => {
						return <li key={i}>#{cat.category}</li>;
					})}
				</ul>
			</Info>
		</Header>
	);
};
export default ArticleHeader;
