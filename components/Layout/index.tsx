import React, { FC, ReactElement } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";

interface IProps {
	children: ReactElement;
}

const Layout: FC<IProps> = ({ children }): ReactElement => {
	const router = useRouter();
	const isArticlesPage = router.asPath === "/articles";

	return (
		<>
			<Navigation isArticlesPage={isArticlesPage} />
			<main>{children}</main>
			<Footer />
		</>
	);
};
export default Layout;
