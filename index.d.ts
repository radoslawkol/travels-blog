declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";
declare module "*.mp4";

import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			bgPrimary: string;
			bgSecondary: string;
			bgLightBrown: string;
			white: string;
			textDefault: string;
			textSecondary: string;
			textWhite: string;
			textDarkBrown: string;
			textLightBrown: string;
			textBlack: string;
			black: string;
			darkBrown: string;
			lightBrown: string;
			darkPrimary: string;
			darkSecondary: string;
			transparentDefault: string;
			boxShadowDefault: string;
			boxShadowHover: string;
		};
		gradients: {
			primary: string;
			dark: string;
		};
		breakpoints: {
			small: string;
			medium: string;
			large: string;
			xLarge: string;
			xxLarge: string;
			xxxLarge: string;
		};
	}
}
