import React, { FC, ReactElement } from "react";
import Navigation from "../Navigation";
import Header from "@/components/Home/Header";
import { Wrapper } from "./Home.styled";
import NewsletterBanner from "../NewsletterBanner";
import LatestPosts from "./LatestPosts";
import Banner from "./Banner";
import AboutInfo from "../AboutInfo";
import Footer from "../Footer";

const Home: FC = (): ReactElement => {
	return (
		<Wrapper>
			<Header />
			<NewsletterBanner />
			<LatestPosts />
			<Banner />
			<section className='about'>
				<AboutInfo />
			</section>
		</Wrapper>
	);
};
export default Home;
