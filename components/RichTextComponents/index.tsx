import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const RichTextComponents = {
	marks: {
		link: ({ children, value }: any) => {
			const rel = !value.href.startsWith("/")
				? "noreferrer noopener"
				: undefined;

			return (
				<Link href={value.href} rel={rel}>
					{children}
				</Link>
			);
		},
		strong: ({ children }: any) => <Strong>{children}</Strong>,
		em: ({ children }) => (
			<Em className='text-gray-600 font-semibold'>{children}</Em>
		),
	},
	block: {
		h1: ({ children }: any) => <H1>{children}</H1>,
		h2: ({ children }: any) => <H2>{children}</H2>,
		h3: ({ children }: any) => <H3>{children}</H3>,
		h4: ({ children }: any) => <H4>{children}</H4>,
		blockquote: ({ children }: any) => <Blockquote>{children}</Blockquote>,
		normal: ({ children }: any) => <Text>{children}</Text>,
	},
	list: {
		bullet: ({ children }: any) => <Ul>{children}</Ul>,
		number: ({ children }: any) => <Ol>{children}</Ol>,
	},
	types: {
		image: ({ value }: any) => {
			return (
				<Picture>
					<Image src={value.asset.url} alt='Blog image' fill />
				</Picture>
			);
		},
	},
};

const Picture = styled.div`
	margin: 10px;
	height: 200px;
	position: relative;
	padding: 20px;
	img {
		object-fit: cover;
		border-radius: 15px;
	}
`;

const Text = styled.p`
	padding: 10px;
`;

const Ul = styled.ul`
	margin-left: 40px;
	padding: 5px 0;
	color: red;
	list-style-type: disc;
`;

const Ol = styled.ol`
	margin-left: 20px;
	padding: 5px 0;
	color: green;
`;
const H1 = styled.h1`
	font-size: 26px;
	padding: 10px 0;
`;
const H2 = styled.h1`
	font-size: 26px;
	padding: 10px 0;
`;
const H3 = styled.h1`
	font-size: 22px;
	padding: 10px 0;
`;
const H4 = styled.h1`
	font-size: 20px;
	padding: 10px 0;
`;

const Strong = styled.strong`
	color: red;
`;

const Em = styled.em`
	color: ${({ theme }) => theme.colors.darkBrown};
`;

const Blockquote = styled.blockquote``;
