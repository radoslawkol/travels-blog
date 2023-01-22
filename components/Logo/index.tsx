import React, { FC, ReactElement } from "react";
import Image from "next/image";
import logo from "../../images/logo.png";
import { LogoWrapper, CompanyName, LinkComponent } from "./Logo.styled";

interface IProps {
	isArticlesPage: boolean;
}

const Logo: FC<IProps> = ({ isArticlesPage }): ReactElement => {
	return (
		<LinkComponent href='/'>
			<LogoWrapper>
				<Image src={logo} width={40} height={40} alt='Logo' />
				<CompanyName isArticlesPage={isArticlesPage}>JTravel</CompanyName>
			</LogoWrapper>
		</LinkComponent>
	);
};
export default Logo;
