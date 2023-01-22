import React, { FC, ReactElement, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useMediaQuery } from "usehooks-ts";
import ModeToggle from "../Navigation/ModeToggle";
import { Backdrop, Nav, XIcon } from "./SideMobileNavigation.styled";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Socials from "../Socials";
import { useRouter } from "next/router";
import { useTheme } from "styled-components";

interface IProps {
	setIsOpen: (isOpen: boolean) => boolean;
}

const SideMobileNavigation: FC<IProps> = ({
	setIsOpen,
}): ReactElement | null => {
	const theme = useTheme();
	const router = useRouter();
	const isMedium = useMediaQuery(`(min-width: 768px)`);
	const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

	useEffect(() => {
		setModalRoot(document.getElementById("modal-root") as HTMLElement);
	}, [modalRoot]);

	useEffect(() => {
		const closeNav = () => setIsOpen(false);
		router.events.on("routeChangeComplete", closeNav);

		return () => {
			router.events.off("routeChangeComplete", closeNav);
		};
	});

	if (modalRoot && !isMedium) {
		return ReactDOM.createPortal(
			<Backdrop>
				<Nav>
					<div>
						<ModeToggle />
						<button onClick={() => setIsOpen(false)}>
							<XIcon icon={faXmark} />
						</button>
					</div>
					<div className='menu'>
						<ul>
							<li>
								<Link href='/'>Home</Link>
							</li>
							<li>
								<Link href='/about'>About</Link>
							</li>
							<li>
								<Link href='/articles'>Articles</Link>
							</li>
							<li>
								<Link href='/photos'>Photos</Link>
							</li>
						</ul>
						<Socials color={theme.colors.darkSecondary} />
					</div>
				</Nav>
			</Backdrop>,
			modalRoot!
		);
	}
	return null;
};

export default SideMobileNavigation;
