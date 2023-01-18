import { FC, ReactElement } from "react";
import ArticleContent from "./ArticleContent";
import ArticleHeader from "./ArticleHeader";
import { Wrapper } from "./Article.styled";

interface IProps {
	article: {
		coverImage: {
			asset: {
				url: string;
			};
		};
	};
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
