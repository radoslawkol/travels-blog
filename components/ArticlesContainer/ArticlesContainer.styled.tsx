import styled from "styled-components";

export const Container = styled.div`
	margin-top: 100px;
	display: grid;
	grid-template-columns: 1fr;
	justify-items: center;
	gap: 60px;
	@media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
		grid-template-columns: 300px 300px;
		justify-content: center;
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.xLarge}) {
		grid-template-columns: 300px 300px 300px;
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.xxLarge}) {
		grid-template-columns: 300px 300px 300px 300px;
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.xxxLarge}) {
		margin-top: 0;
		gap: 40px;
	}
`;
