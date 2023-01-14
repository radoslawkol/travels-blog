/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	compiler: {
		styledComponents: true,
	},
	images: {
		domains: ["images.unsplash.com", "cdn.sanity.io"],
	},
};

module.exports = nextConfig;
