import styled from "styled-components";
import Link from "next/link";

interface Props {
	isArticlesPage: boolean;
}

export const LogoWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 2px;
`;

export const CompanyName = styled.strong`
	color: ${(props: Props) =>
		props.isArticlesPage
			? ({ theme }) => theme.colors.textSecondary
			: ({ theme }) => theme.colors.textWhite};
	text-transform: uppercase;
	font-size: 20px;
	text-decoration: none;
`;

export const LinkComponent = styled(Link)`
	text-decoration: none;
`;
