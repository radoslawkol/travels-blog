import { FC, ReactElement } from "react";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";
import { Container } from "./ArticleContent.styled";

interface IProps {
	article: { content: [] };
}

const ArticleContent: FC<IProps> = ({ article }): ReactElement => {
	return (
		<Container>
			<PortableText value={article.content} components={RichTextComponents} />
		</Container>
	);
};
export default ArticleContent;
