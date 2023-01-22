import styled from "styled-components";

interface Props {
	headerImageSmall?: {
		src: string;
	};
	headerImageLarge?: {
		src: string;
	};
}

export const Header = styled.header`
	position: relative;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 20px;
	background: ${({ theme }) => theme.gradients.dark},
		url(${(props: Props) => props.headerImageSmall.src});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	@media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
		background: ${({ theme }) => theme.gradients.dark},
			url(${(props) => props.headerImageLarge.src});
		background-position: center;
	}

	h1 {
		text-align: center;
		font-size: 24px;
		font-weight: 400;
		color: ${({ theme }) => theme.colors.textWhite};
		text-shadow: 2px 4px 8px black;
		letter-spacing: 1px;
		line-height: 36px;
		@media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
			font-size: 28px;
		}
		@media (min-width: ${({ theme }) => theme.breakpoints.large}) {
			font-size: 32px;
		}
		@media (min-width: ${({ theme }) => theme.breakpoints.xLarge}) {
			font-size: 38px;
		}
	}

	svg {
		position: absolute;
		bottom: 0;
		z-index: 1;
	}
`;
