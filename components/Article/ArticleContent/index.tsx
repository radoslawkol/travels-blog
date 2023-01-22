import { FC, ReactElement } from "react";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";
import { Container } from "./ArticleContent.styled";
import { IArticle } from "@/interfaces/IArticle";

interface IProps {
	article: IArticle;
}

const ArticleContent: FC<IProps> = ({ article }): ReactElement => {
	return (
		<Container>
			<PortableText value={article.content} components={RichTextComponents} />
		</Container>
	);
};
export default ArticleContent;
