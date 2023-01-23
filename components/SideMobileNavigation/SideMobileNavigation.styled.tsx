import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Backdrop = styled.div`
	position: fixed;
	top: 0;
	width: 100%;
	height: 100%;
	background: ${({ theme }) => theme.gradients.dark};
	backdrop-filter: blur(2px);
	z-index: 1000;
`;

export const Nav = styled.nav`
	position: fixed;
	top: 0;
	right: 0;
	width: 70%;
	height: 100vh;
	background-color: ${({ theme }) => theme.colors.bgPrimary};

	div {
		display: flex;
		align-items: center;
		justify-content: end;
	}

	div.menu {
		margin-top: 30%;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
	button {
		margin-left: 30px;
		padding: 5px 10px;
		border: none;
		background: transparent;
		cursor: pointer;
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 30px;
		list-style: none;

		li {
			padding: 5px;
			border-radius: 10px;
			transition: text-shadow 0.2s, transform 0.2s;
			&:hover,
			&:focus {
				transform: scale(1.1);
				text-shadow: 2px 4px 5px ${({ theme }) => theme.colors.bgSecondary};
			}
		}
		a {
			font-size: 18px;
			color: ${({ theme }) => theme.colors.textSecondary};
			text-decoration: none;
		}
	}
`;

export const XIcon = styled(FontAwesomeIcon)`
	width: 40px;
	height: 40px;
	color: ${({ theme }) => theme.colors.textSecondary};
`;
