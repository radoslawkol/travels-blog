import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 10px;

	button {
		padding: 6px;
		border: none;
		border-radius: 8px;
		color: ${({ theme }) => theme.colors.darkBrown};
		background-color: ${({ theme }) => theme.colors.lightBrown};
		cursor: pointer;
		transition: transform 0.3s, box-shadow 0.3s;
		@media (min-width: ${({ theme }) => theme.breakpoints.large}) {
			font-size: 18px;
		}

		&:hover {
			transform: scale(1.05);
			box-shadow: 2px 2px 7px ${({ theme }) => theme.colors.darkBrown};
		}
	}
`;
