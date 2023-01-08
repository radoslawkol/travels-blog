import React, { FC, ReactElement } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface Props {
	children: ReactElement;
}

const Layout: FC<Props> = ({ children }): ReactElement => {
	return (
		<>
			<Navigation />
			<main>{children}</main>
			<Footer />
		</>
	);
};
export default Layout;
