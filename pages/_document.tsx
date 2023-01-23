import NextDocument, {
	DocumentContext,
	Html,
	Head,
	Main,
	NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import React from "react";

export default function PageDocument() {
	return (
		<Html>
			<Head>
				<link rel='shortcut icon' href='/logo.png' />
			</Head>
			<body>
				<Main />
				<NextScript />
				<div id='modal-root'></div>
			</body>
		</Html>
	);
}

PageDocument.getInitialProps = async (ctx: DocumentContext) => {
	const styledComponentsSheet = new ServerStyleSheet();
	const originalRenderPage = ctx.renderPage;
	try {
		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: (App) => (props) => {
					return styledComponentsSheet.collectStyles(<App {...props} />);
				},
			});
		const initialProps = await NextDocument.getInitialProps(ctx);
		initialProps.styles = [
			initialProps.styles,
			styledComponentsSheet.getStyleElement(),
		];
		return initialProps;
	} finally {
		styledComponentsSheet.seal();
	}
};
