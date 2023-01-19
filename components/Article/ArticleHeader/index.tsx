import { FC, ReactElement } from "react";
import Image from "next/image";
import { Header, Info } from "./ArticleHeader.styled";

interface IProps {
	article: {
		coverImage: {
			asset: { url: string };
		};
		title: string;
		author: { name: string };
		date: "string";
		categories: { category: { _id: string } }[];
	};
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
					Posted on {date} by {article.author.name}
				</span>
				<h1>{article.title}</h1>
				<ul>
					{article.categories?.map((cat, i) => {
						return <li key={cat.category._id + i}>#{cat.category}</li>;
					})}
				</ul>
			</Info>
		</Header>
	);
};
export default ArticleHeader;
