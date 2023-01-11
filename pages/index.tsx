import { useEffect } from "react";
import Head from "next/head";
import type { NextPage } from "next";
import Home from "@/components/Home";

const HomePage: NextPage = () => {
	useEffect(() => {
		document.body.style.background = "#F8F8F8";
	}, []);
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
