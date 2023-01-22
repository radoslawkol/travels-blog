import styled from "styled-components";

interface Props {
	image?: {
		src: string;
	};
}

export const Section = styled.section`
	position: relative;
	min-height: 300px;
	padding: 40px 20px;
	background: linear-gradient(rgba(0, 0, 0, 0.685), rgba(0, 0, 0, 0.185)),
		url(${(props: Props) => props.image.src});
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	color: ${({ theme }) => theme.colors.textWhite};
	@media (min-width: ${({ theme }) => theme.breakpoints.large}) {
		padding: 80px;
	}

	h2 {
		margin-bottom: 16px;
		@media (min-width: ${({ theme }) => theme.breakpoints.large}) {
			font-size: 32px;
		}
	}
	p {
		margin-bottom: 20px;
		@media (min-width: ${({ theme }) => theme.breakpoints.large}) {
			margin-bottom: 10px;
			font-size: 22px;
		}
	}
	q {
		display: inline-block;
		padding-bottom: 20px;
		@media (min-width: ${({ theme }) => theme.breakpoints.large}) {
			font-size: 18px;
		}
	}
`;
