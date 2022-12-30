import Head from "next/head";
import type { NextPage } from "next";
import Home from "@/components/Home";

const HomePage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Travels Blog: John Smith</title>
			</Head>
			<Home />
		</>
	);
};

export default HomePage;
