import React, { useState } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme, darkTheme } from "@/styles/theme.styled";
import GlobalStyles from "@/styles/globals.styled";
import Layout from "@/components/Layout";

export const ThemeContext = React.createContext(null);

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
