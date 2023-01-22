import React, { useState } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme, darkTheme } from "@/styles/theme.styled";
import GlobalStyles from "@/styles/globals.styled";
import Layout from "@/components/Layout";

export const ThemeContext = React.createContext(null);

interface Props {
	colors: {
		bgPrimary: "#F8F8F8";
		bgSecondary: "#059270";
		bgLightBrown: "#DBD0C7";
		white: "#ffffff";
		textDefault: "#ece8e8";
		textSecondary: "#393939";
		textWhite: "#F8F8F8";
		textDarkBrown: "#8C6D54";
		textLightBrown: "#DBD0C7";
		textBlack: "#393939";
		black: "#000000";
		darkBrown: "#8C6D54";
		lightBrown: "#DBD0C7";
		darkPrimary: "#393939";
		darkSecondary: "#161C24";
		transparentDefault: " rgba(245, 239, 239, 0.719)";
		boxShadowDefault: "2px 4px 10px 6px rgba(22, 20, 20, 0.144);";
		boxShadowHover: "2px 4px 18px 6px rgba(0, 0, 0, 0.233)";
	};
	gradients: {
		primary: "linear-gradient(180deg, #C6B2A3 0%, rgba(237, 229, 222, 0.91) 100%)";
		dark: "linear-gradient(180deg, #1a1918 0%, rgba(59, 32, 8, 0.479) 100%)";
	};
	breakpoints: {
		small: "576px";
		medium: "768px";
		large: "992px";
		xLarge: "1200px";
		xxLarge: "1400px";
		xxxLarge: "1800px";
	};
}

function MyApp({ Component, pageProps, ...appProps }: AppProps) {
	const studioPage = appProps.router.pathname.includes("/studio");
	const LayoutComponent = studioPage ? React.Fragment : Layout;

	const [darkMode, setDarkMode] = useState(false);

	return (
		<ThemeContext.Provider value={[darkMode, setDarkMode]}>
			<ThemeProvider theme={darkMode ? darkTheme : theme}>
				<GlobalStyles />
				<LayoutComponent>
					<Component {...pageProps} />
				</LayoutComponent>
			</ThemeProvider>
		</ThemeContext.Provider>
	);
}

export default MyApp;
