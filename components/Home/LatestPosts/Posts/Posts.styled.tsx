import styled from "styled-components";

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
