import styled from "styled-components";

export const Container = styled.div`
	margin: 100px auto;
	display: inline-flex;
	align-items: center;
	border-radius: 15px;
	background-color: ${({ theme }) => theme.colors.lightBrown};
	box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.116);

	button {
		padding: 8px;
		font-size: 16px;
		color: ${({ theme }) => theme.colors.darkBrown};
		border: none;
		background-color: transparent;
		cursor: pointer;
	}

	span {
		padding: 8px 4px;
		font-weight: 800;
		color: ${({ theme }) => theme.colors.darkBrown};
	}
`;
