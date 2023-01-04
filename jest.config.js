module.exports = {
	testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
	setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
	testEnvironment: "jsdom",

	globals: {
		"ts-jest": {
			tsConfig: {
				allowJs: true,
			},
		},
	},

	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/$1",
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
			"<rootDir>/__mocks__/fileMock.js",
	},
	transform: {
		"^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
	},
	transformIgnorePatterns: [
		"/node_modules/",
		"^.+\\.module\\.(css|sass|scss)$",
	],
};
