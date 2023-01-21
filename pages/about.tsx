import React, { useEffect, FC, ReactElement } from "react";
import Head from "next/head";
import AboutHeader from "@/components/AboutHeader";
import AboutContent from "@/components/AboutContent";
import { useMediaQuery } from "usehooks-ts";
import { useSetBodyBackground } from "@/utils/setBodyBackgroundHook";
import { useTheme } from "styled-components";

const AboutPage: FC = (): ReactElement => {
	const theme = useTheme();
	const medium = useMediaQuery("(min-width: 768px)");
	const xxLarge = useMediaQuery("(min-width: 1400px)");

	useSetBodyBackground({ color: theme.colors.bgLightBrown });

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
