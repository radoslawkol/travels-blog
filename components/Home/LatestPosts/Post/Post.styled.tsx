import styled from "styled-components";
import Link from "next/link";

export const Card = styled(Link)`
	text-decoration: none;
	div {
		position: relative;
		min-height: 300px;
		@media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
			min-height: 220px;
		}
		@media (min-width: ${({ theme }) => theme.breakpoints.large}) {
			min-height: 300px;
		}
	}
	img {
		border-radius: 20px;
	}
	p {
		padding: 6px;
		color: ${({ theme }) => theme.colors.darkBrown};
	}
`;
