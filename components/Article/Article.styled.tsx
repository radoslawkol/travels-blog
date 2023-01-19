import styled from "styled-components";

export const Wrapper = styled.div`
	width: 100%;
	border-radius: 15px;
	@media (min-width: ${({ theme }) => theme.breakpoints.small}) {
		padding: 30px;
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
		padding: 20px 60px;
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.large}) {
		padding: 20px 100px;
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.xLarge}) {
		padding: 20px 200px;
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.xxxLarge}) {
		padding: 20px 300px;
	}
`;
