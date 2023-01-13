import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme.styled";
import GlobalStyles from "@/styles/globals.styled";
import Layout from "@/components/Layout";

function MyApp({ Component, pageProps, ...appProps }: AppProps) {
	const studioPage = appProps.router.pathname.includes("/studio");

	const LayoutComponent = studioPage ? React.Fragment : Layout;

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<LayoutComponent>
				<Component {...pageProps} />
			</LayoutComponent>
		</ThemeProvider>
	);
}

export default MyApp;
