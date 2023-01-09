import styled from "styled-components";

export const Button = styled.button`
	padding: 5px;
	font-size: 14px;
	color: ${({ theme }) => theme.colors.darkBrown};
	letter-spacing: 0.5px;
	border-radius: 5px;
	border: 1px solid ${({ theme }) => theme.colors.darkBrown};
	background-color: transparent;
	box-shadow: 0 2px 6px 3px rgba(51, 45, 45, 0.164);
	cursor: pointer;
	transition: box-shadow 0.3s, transform 0.3s;
	@media (min-width: ${({ theme }) => theme.breakpoints.large}) {
		font-size: 16px;
	}

	&:hover {
		transform: scale(1.05);
		box-shadow: 0 2px 6px 3px rgba(51, 48, 48, 0.281);
	}
`;
