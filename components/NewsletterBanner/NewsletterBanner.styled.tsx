import styled from "styled-components";

export const Container = styled.div`
	padding: 20px;
	color: ${({ theme }) => theme.colors.textWhite};
	background-color: ${({ theme }) => theme.colors.bgSecondary};
	@media (min-width: ${({ theme }) => theme.breakpoints.small}) {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		@media (min-width: ${({ theme }) => theme.breakpoints.large}) {
			gap: 50px;
		}
	}
	h3 {
		margin-bottom: 16px;
		font-size: 25px;
		letter-spacing: 1px;
		@media (min-width: ${({ theme }) => theme.breakpoints.small}) {
			margin-bottom: 0;
		}
		@media (min-width: ${({ theme }) => theme.breakpoints.large}) {
			font-size: 32px;
		}
	}
`;
