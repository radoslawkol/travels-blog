import { FC, ReactElement } from "react";
import ArticleContent from "./ArticleContent";
import ArticleHeader from "./ArticleHeader";
import { Wrapper } from "./Article.styled";
import { IArticle } from "@/interfaces/IArticle";

interface IProps {
	article: IArticle;
}

const Article: FC<IProps> = ({ article }): ReactElement => {
	return (
		<Wrapper>
			<ArticleHeader article={article} />
			<ArticleContent article={article} />
		</Wrapper>
	);
};
export default Article;
