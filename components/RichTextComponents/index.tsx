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
					<LinkElement>{children}</LinkElement>
				</Link>
			);
		},
		strong: ({ children }: any) => <Strong>{children}</Strong>,
		em: ({ children }: any) => (
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
	listItem: ({ children }: any) => <ListItem>{children}</ListItem>,
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

const LinkElement = styled.a`
	color: ${({ theme }) => theme.colors.bgSecondary};
`;

const Picture = styled.div`
	margin: 10px;
	height: 200px;
	position: relative;
	padding: 20px;
	@media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
		height: 250px;
		width: 500px;
		margin: 40px auto;
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.xxLarge}) {
		height: 350px;
		width: 700px;
		margin: 40px auto;
	}

	img {
		object-fit: cover;
		border-radius: 15px;
	}
`;

const Text = styled.p`
	padding: 10px 0;
	color: ${({ theme }) => theme.colors.textSecondary};

	@media (min-width: ${({ theme }) => theme.breakpoints.xxLarge}) {
		font-size: 18px;
	}
`;

const Ul = styled.ul`
	margin-left: 40px;
	padding: 5px 0;
	list-style-type: disc;
`;

const Ol = styled.ol`
	margin-left: 20px;
	padding: 5px 0;
`;

const ListItem = styled.li`
	padding: 3px;
	color: ${({ theme }) => theme.colors.textSecondary};
	@media (min-width: ${({ theme }) => theme.breakpoints.xxLarge}) {
		font-size: 18px;
	}
`;

const H1 = styled.h1`
	font-size: 26px;
	padding: 10px 0;
	color: ${({ theme }) => theme.colors.textSecondary};
	@media (min-width: ${({ theme }) => theme.breakpoints.xxLarge}) {
		font-size: 30px;
	}
`;
const H2 = styled.h1`
	font-size: 26px;
	padding: 10px 0;
	color: ${({ theme }) => theme.colors.textSecondary};
	@media (min-width: ${({ theme }) => theme.breakpoints.xxLarge}) {
		font-size: 28px;
	}
`;
const H3 = styled.h1`
	font-size: 22px;
	padding: 10px 0;
	color: ${({ theme }) => theme.colors.textSecondary};
	@media (min-width: ${({ theme }) => theme.breakpoints.large}) {
		font-size: 28px;
		padding: 80px 0 20px;
	}
`;
const H4 = styled.h1`
	font-size: 20px;
	padding: 10px 0;
	color: ${({ theme }) => theme.colors.textSecondary};
`;

const Strong = styled.strong`
	color: ${({ theme }) => theme.colors.darkBrown};
`;

const Em = styled.em`
	color: ${({ theme }) => theme.colors.darkBrown};
`;

const Blockquote = styled.blockquote``;
