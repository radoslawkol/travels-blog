import styled from "styled-components";
import Link from "next/link";

export const Card = styled(Link)`
	width: 300px;
	text-decoration: none;
	border-radius: 20px;
	box-shadow: 1px 2px 8px 5px rgba(0, 0, 0, 0.178);
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
		border-radius: 20px 20px 0 0;
	}
	p {
		padding: 10px;
		font-size: 18px;
		text-transform: capitalize;
		font-weight: 200;
		letter-spacing: 0.5px;
		color: ${({ theme }) => theme.colors.textSecondary};
	}
`;
