import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

type Props = {};

class Document extends NextDocument<IProps> {
	render() {
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
}

export default Document;
