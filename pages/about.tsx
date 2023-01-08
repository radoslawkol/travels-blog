import React, { useEffect } from "react";
import Head from "next/head";
import AboutHeader from "@/components/AboutHeader";
import AboutContent from "@/components/AboutContent";

export default function AboutPage() {
	useEffect(() => {
		document.body.style.backgroundColor = "#DBD0C7";
	}, []);

	return (
		<>
			<Head>
				<title>Travels Blog: About me - John Smith</title>
			</Head>
			<div>
				<AboutHeader />
				<AboutContent />
			</div>
		</>
	);
}
