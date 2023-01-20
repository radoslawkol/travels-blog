import styled from "styled-components";

export const Section = styled.section`
	padding: 50px 20px;
	@media (min-width: ${({ theme }) => theme.breakpoints.large}) {
		padding: 70px 80px;
	}
`;

export const Container = styled.div`
	margin: 40px 0;
	display: flex;
	flex-direction: column;
	gap: 60px;
	img {
		object-fit: cover;
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
		flex-direction: row;
		justify-content: center;
	}
`;
