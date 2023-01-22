import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	gap: 10px;
	margin-top: 10px;

	input {
		padding: 4px;
		font-size: 16px;
		border-radius: 100px;
		border: none;
		&:focus,
		&:hover {
			outline-color: ${({ theme }) => theme.colors.bgSecondary};
		}
		@media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
			width: 300px;
		}
	}

	button {
		padding: 10px;
		color: ${({ theme }) => theme.colors.textWhite};
		border: none;
		background-color: ${({ theme }) => theme.colors.darkBrown};
		cursor: pointer;
		transition: transform 0.3s;
		&:hover {
			transform: scale(1.1);
		}
		@media (min-width: ${({ theme }) => theme.breakpoints.small}) {
			font-size: 18px;
		}
	}
`;
