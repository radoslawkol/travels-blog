import React, { FC, ReactElement } from "react";
import Image from "next/image";
import logo from "../../images/logo.png";
import { LogoWrapper, CompanyName, LinkComponent } from "./Logo.styled";

const Logo: FC = (): ReactElement => {
	return (
		<LinkComponent href='/'>
			<LogoWrapper>
				<Image src={logo} width={40} height={40} alt='Logo' />
				<CompanyName>JTravel</CompanyName>
			</LogoWrapper>
		</LinkComponent>
	);
};
export default Logo;
