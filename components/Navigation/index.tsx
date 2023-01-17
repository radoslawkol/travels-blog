import React, { FC, ReactElement, useEffect, useState } from "react";
import Logo from "@/components/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuBarsIcon, Nav, MenuList, RightNav } from "./Navigation.styled";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faPinterestP, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import ModeToggle from "./ModeToggle";
import SideMobileNavigation from "../SideMobileNavigation";
import Socials from "../Socials";
import { useTheme } from "styled-components";

interface IProps {
	isArticlesPage: boolean;
}

const Navigation: FC<IProps> = ({ isArticlesPage }): ReactElement => {
	const theme = useTheme();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<Nav>
				<Logo isArticlesPage={isArticlesPage} />
				<MenuList isArticlesPage={isArticlesPage}>
					<li>
						<Link href='/'>Home</Link>
					</li>

					<li>
						<Link href='/about'>About</Link>
					</li>

					<li>
						<Link href='articles'>Articles</Link>
					</li>

					<li>
						<Link href='photos'>Photos</Link>
					</li>
				</MenuList>
				<RightNav>
					<Socials
						color={
							isArticlesPage
								? theme.colors.textSecondary
								: theme.colors.textWhite
						}
					/>
					<ModeToggle />
					<button>
						<MenuBarsIcon
							isArticlesPage={isArticlesPage}
							icon={faBars}
							onClick={() => setIsOpen(true)}
						/>
					</button>
				</RightNav>
			</Nav>
			{isOpen && <SideMobileNavigation setIsOpen={setIsOpen} />}
		</>
	);
};

export default Navigation;
