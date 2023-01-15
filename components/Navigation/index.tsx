import React, { FC, ReactElement, useState } from "react";
import Logo from "@/components/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	MenuBarsIcon,
	Nav,
	MenuList,
	Socials,
	RightNav,
} from "./Navigation.styled";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faPinterestP, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import ModeToggle from "./ModeToggle";
import SideMobileNavigation from "../SideMobileNavigation";

interface IProps {
	isArticlesPage: boolean;
}

const Navigation: FC<IProps> = ({ isArticlesPage }): ReactElement => {
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
					<Socials isArticlesPage={isArticlesPage}>
						<a
							href='https://pl.pinterest.com/'
							target='_blank'
							rel='noreferrer'
						>
							<FontAwesomeIcon icon={faPinterestP} />
						</a>
						<a
							href='https://www.instagram.com/'
							target='_blank'
							rel='noreferrer'
						>
							<FontAwesomeIcon icon={faInstagram} />
						</a>
					</Socials>
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
