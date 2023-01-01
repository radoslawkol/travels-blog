import path from "node:path/win32";

module.exports = {
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				include: path.join(__dirname, "/client/src"),
				loader: "babel-loader",
				query: {
					presets: ["react", "es2015", "stage-1"],
				},
			},
			{
				test: /\.(gif|svg|jpg|png)$/,
				loader: "file-loader",
			},
		],
	},
};
