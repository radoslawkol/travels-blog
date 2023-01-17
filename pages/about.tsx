import React, { useEffect, FC, ReactElement, useContext } from "react";
import Head from "next/head";
import AboutHeader from "@/components/AboutHeader";
import AboutContent from "@/components/AboutContent";
import { useMediaQuery } from "usehooks-ts";
import { ThemeContext } from "./_app";

const AboutPage: FC = (): ReactElement => {
	const [darkMode, setDarkMode] = useContext(ThemeContext);
	const medium = useMediaQuery("(min-width: 768px)");
	const xxLarge = useMediaQuery("(min-width: 1400px)");

	useEffect(() => {
		document.body.style.background = darkMode ? "#393939" : "#DBD0C7";
	}, [darkMode]);

	useEffect(() => {
		if (medium) {
			scrollTo({ behavior: "smooth", top: 360 });
		}
		if (xxLarge) {
			scrollTo({ behavior: "smooth", top: 320 });
		}
	}, []);

	return (
		<>
			<Head>
				<title>Travels Blog: About me - John Smith</title>
			</Head>
			<div>
				<AboutHeader />
				<AboutContent />
			</div>
		</>
	);
};
export default AboutPage;
