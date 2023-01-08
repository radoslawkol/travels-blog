import styled from "styled-components";

export const Section = styled.section`
	width: 100%;
	padding: 40px 20px;
	background-color: ${({ theme }) => theme.colors.lightBrown};
	@media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
		padding: 60px 40px;
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.xLarge}) {
		padding: 60px 100px;
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.xxLarge}) {
		padding: 0px 300px;
	}

	div.info {
		display: flex;
		justify-content: center;
		@media (min-width: ${({ theme }) => theme.breakpoints.xLarge}) {
			margin-bottom: 40px;
		}
	}
	div.container-1 {
		@media (min-width: ${({ theme }) => theme.breakpoints.large}) {
			display: flex;
			gap: 20px;
		}
		@media (min-width: ${({ theme }) => theme.breakpoints.xLarge}) {
			gap: 60px;
		}
	}

	h2 {
		margin: 20px 0px;
		font-size: 20px;
		color: ${({ theme }) => theme.colors.darkBrown};
		text-transform: uppercase;
	}

	p {
		color: ${({ theme }) => theme.colors.darkBrown};
		letter-spacing: 0.5px;
		line-height: 26px;
		@media (min-width: ${({ theme }) => theme.breakpoints.large}) {
			width: 90%;
		}
	}

	p.lastParagraph {
		@media (min-width: ${({ theme }) => theme.breakpoints.xLarge}) {
			width: 70%;
		}
	}

	div.line {
		margin-top: 20px;
		margin-bottom: 60px;
		width: 100%;
		height: 1px;
		background-color: ${({ theme }) => theme.colors.darkBrown};
	}
`;

export const ContentImage = styled.div`
	margin: 40px 0;
	width: 100%;
	@media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
		width: 70%;
		margin: 60px auto;
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.large}) {
		margin: 0;
	}
	img {
		width: 100%;
		height: 300px;
		object-fit: cover;
		object-position: center;
		border-radius: 10px;
	}
`;
