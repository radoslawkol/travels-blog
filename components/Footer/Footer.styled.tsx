import styled from "styled-components";

export const Wrapper = styled.div`
	div {
		position: relative;
		bottom: -5px;
	}
`;

export const Container = styled.footer`
	display: flex;
	flex-direction: column;
	gap: 30px;
	padding: 20px;
	color: ${({ theme }) => theme.colors.textWhite};
	background-color: ${({ theme }) => theme.colors.bgSecondary};
	@media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
		flex-direction: row;
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.large}) {
		padding: 20px 100px;
		justify-content: center;
	}
	p {
		margin-top: 20px;
		line-height: 22px;
		max-width: 80%;
	}

	div.left {
		@media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
			width: 60%;
		}
	}

	button {
		margin: 10px 0;
		border: none;
		border-radius: 5px;
		background-color: ${({ theme }) => theme.colors.darkBrown};
		cursor: pointer;
		a {
			display: inline-block;
			padding: 6px;
			font-size: 16px;
			color: ${({ theme }) => theme.colors.textWhite};
			text-decoration: none;
		}
		&:hover {
			transform: scale(0.95);
		}
	}
	h3 {
		margin-bottom: 10px;
		text-transform: uppercase;
		letter-spacing: 1px;
	}
	div.contact {
		padding-top: 14px;
	}
`;
