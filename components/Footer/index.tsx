import Link from "next/link";
import React, { FC, ReactElement } from "react";
import Logo from "../Logo";
import Socials from "@/components/Socials";
import { Container, Wrapper } from "./Footer.styled";
import { useTheme } from "styled-components";

const Footer: FC = (): ReactElement => {
	const theme = useTheme();
	return (
		<Wrapper>
			<div className='wave'>
				<svg
					width={"100%"}
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 1440 320'
				>
					<path
						fill='#059270'
						fillOpacity='1'
						d='M0,96L48,90.7C96,85,192,75,288,106.7C384,139,480,213,576,224C672,235,768,181,864,170.7C960,160,1056,192,1152,213.3C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
					></path>
				</svg>
			</div>
			<Container>
				<div className='left'>
					<Logo isArticlesPage={false} />
					<p>
						Lorem ipsum dolor sit amet consectetur. Elementum arcu eu mauris sem
						facilisi lectus viverra quis platea. Diam porta in at ac condimentum
						egestas quis consequat. Mattis et amet consectetur nulla natoque
						tellus. Integer libero ut quis turpis purus sit in donec mi. Felis
						tempor cras gravida lorem. Eu dolor non scelerisque lacus sed. Sed
						est ultrices.
					</p>
					<button>
						<Link href='/about'>About Me</Link>
					</button>
				</div>
				<div className='contact'>
					<h3>Contact</h3>
					<span>traveljohn@example.gmail.com</span>
					<Socials color={theme.colors.textWhite} />
				</div>
			</Container>
		</Wrapper>
	);
};
export default Footer;
