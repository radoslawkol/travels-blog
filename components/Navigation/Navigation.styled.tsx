import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Nav = styled.nav`
	position: absolute;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5px 10px;
	background-color: transparent;
	z-index: 1000;

	button {
		border: none;
		background: transparent;
	}
`;

export const MenuList = styled.ul`
	display: none;
	align-items: center;
	gap: 20px;
	font-size: 18px;
	color: ${({ theme }) => theme.colors.bgPrimary};
	list-style: none;

	li {
		a {
			color: ${({ theme }) => theme.colors.bgPrimary};
			text-decoration: none;
			/* font-weight: lighter; */
			letter-spacing: 0.5px;
			transition: text-transform 0.3s;
		}
		&:hover a {
			text-shadow: 0px 5px 8px ${({ theme }) => theme.colors.bgSecondary};
		}
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
		display: flex;
	}
`;

export const RightNav = styled.div`
	display: flex;
	align-items: center;
	gap: 40px;
`;

export const Socials = styled.div`
	display: none;
	gap: 10px;
	a {
		color: ${({ theme }) => theme.colors.bgPrimary};
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
		display: flex;
	}
`;

export const MenuBarsIcon = styled(FontAwesomeIcon)`
	width: 40px;
	height: 40px;
	color: ${({ theme }) => theme.colors.bgPrimary};
	cursor: pointer;
	@media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
		display: none;
	}
`;
