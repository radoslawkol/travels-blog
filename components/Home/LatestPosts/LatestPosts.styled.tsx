import styled from "styled-components";

export const Section = styled.section`
	padding: 50px 20px;
	@media (min-width: ${({ theme }) => theme.breakpoints.large}) {
		padding: 70px 80px;
	}
`;
