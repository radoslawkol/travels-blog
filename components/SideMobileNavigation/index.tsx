import React, { FC, ReactElement, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useMediaQuery } from "usehooks-ts";
import ModeToggle from "../Navigation/ModeToggle";
import { Backdrop, Nav, XIcon } from "./SideMobileNavigation.styled";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Socials from "../Socials";

const SideMobileNavigation: FC = ({
	setIsOpen,
}: {
	setIsOpen: () => boolean;
}): ReactElement | null => {
	const isMedium = useMediaQuery(`(min-width: 768px)`);
	const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

	useEffect(() => {
		setModalRoot(document.getElementById("modal-root") as HTMLElement);
		console.log(modalRoot);
	}, [modalRoot]);

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
						<Socials color={({ theme }) => theme.colors.darkSecondary} />
					</div>
				</Nav>
			</Backdrop>,
			modalRoot!
		);
	}
	return null;
};

export default SideMobileNavigation;
